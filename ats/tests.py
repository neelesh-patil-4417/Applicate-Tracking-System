from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ats.models import Candidate

class CandidateAPITestCase(APITestCase):
    def setUp(self):
        """Setup test data before running each test case"""
        self.candidate = Candidate.objects.create(
            name="John Doe", age=25, gender="Male", phone_number="9876543210"
        )
        self.list_url = reverse('candidates-api')  
        self.search_url = reverse('search-candidates')

    def test_create_candidate(self):
        """Test creating a new candidate"""
        data = {"name": "nilesh", "age": 28, "gender": "M", "email":"n@gmail.com","phone_number": "9999999999"}
        response = self.client.post(self.list_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Candidate.objects.count(), 2)

    def test_get_all_candidates(self):
        """Test retrieving all candidates"""
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_single_candidate(self):
        """Test retrieving a single candidate"""
        response = self.client.get(f"{self.list_url}?id={self.candidate.id}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], self.candidate.name)

    def test_update_candidate(self):
        """Test updating a candidate"""
        data = {"name": "Patil Updated", "age": 30,"gender":"F","phone_number":"123456789"}
        response = self.client.put(f"{self.list_url}?id={self.candidate.id}", data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.candidate.refresh_from_db()
        self.assertEqual(self.candidate.name, "Patil Updated")

    def test_delete_candidate(self):
        """Test deleting a candidate"""
        response = self.client.delete(f"{self.list_url}?id={self.candidate.id}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(Candidate.objects.filter(id=self.candidate.id).exists())

    def test_search_candidate(self):
        """Test searching for candidates"""
        response = self.client.get(f"{self.search_url}?search_candidate=John")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data["results"]), 1)
