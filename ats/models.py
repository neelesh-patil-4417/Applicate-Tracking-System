from django.db import models
from uuid import uuid4

def generate_candidate_id():
    return f"candidate_{uuid4().hex}"


# Create your models here.
class Candidate(models.Model):
    id = models.CharField(primary_key=True, default=generate_candidate_id, max_length=191)
    name = models.CharField(max_length = 20)
    age = models.IntegerField()
    gender_choices = [("M","Male"),("F","Female"),("O","Others")]
    gender = models.CharField(choices = gender_choices, max_length = 10)
    email = models.EmailField(unique = True)
    phone_number = models.CharField(max_length = 14)