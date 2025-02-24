from rest_framework import serializers
from ats.models import Candidate


class Candidate_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = Candidate
        fields = '__all__'
        

class CandidateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ["name", "age", "gender", "phone_number"]
