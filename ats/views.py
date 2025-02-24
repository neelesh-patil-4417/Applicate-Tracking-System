from rest_framework.decorators import api_view,APIView
from ats.models import Candidate
from ats.serializers import Candidate_serializer, CandidateUpdateSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED,HTTP_200_OK,HTTP_500_INTERNAL_SERVER_ERROR,HTTP_400_BAD_REQUEST
from rest_framework.validators import ValidationError

from django.db.models import Case, When, Value, IntegerField, Q

# Create your views here.


class Candidate_view(APIView):
    def get(self,req):
        try:
            if not req.query_params.get("id"):
                candidates = Candidate.objects.all()
                if candidates.exists():
                    serialized_data = Candidate_serializer(candidates,many=True).data
                    return Response(data=serialized_data,status=HTTP_200_OK)
                else:
                    raise ValidationError("No Candidates found")
            else:
                candidate_id = req.query_params.get("id")
                candidate = Candidate.objects.filter(id = candidate_id)
                if candidate.exists():
                    candidate = candidate.first()
                    serialized_data = Candidate_serializer(candidate).data
                    return Response(data=serialized_data,status=HTTP_200_OK)
                else:
                    raise ValidationError("No Candidate found with the provided id")
        except ValidationError as e:
            return Response(data={"error":str(e)},status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(data={"message":str(e)},status=HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self,req):
        try:
            serialized_candidate = Candidate_serializer(data=req.data)
            if serialized_candidate.is_valid():
                # add id to serialized_candidate and then save it
                # id should candidate_uuid
                serialized_candidate.save()
                return Response(data={"Message":"Candidate successfully created"},status=HTTP_201_CREATED)
            else:
                raise ValidationError(serialized_candidate.errors)
            
        except ValidationError as e:
            return Response(data={"error":str(e)},status=HTTP_400_BAD_REQUEST)
    
        except Exception as e:
            return Response({"message":str(e)},status=HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self,req):
        try:
            id = req.query_params.get("id")
            if not id:
                raise ValidationError("No id founds")

            candidate = Candidate.objects.filter(id=id)
            if candidate.exists():
                candidate=candidate.first()
                serialized_data = CandidateUpdateSerializer(data=req.data)
                if serialized_data.is_valid():
                    validate_data = serialized_data.data
                    
                    candidate.name = validate_data.get("name")
                    candidate.age = validate_data.get("age")
                    candidate.gender = validate_data.get("gender")
                    candidate.phone_number = validate_data.get("phone_number")

                    candidate.save()

                    return Response({"message":"Successfully updated the candidate details", "id": candidate.id},status=HTTP_200_OK)
                else:
                    raise ValidationError(serialized_data.errors)
            else:
                raise ValidationError("No candidate found for this id",id)
        except ValidationError as e:
            return Response(data={"message":str(e)},status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            import traceback
            traceback.print_exc()

            return Response(data={"message":str(e)},status=HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self,req):
        try:
            id = req.query_params.get("id")
            if not id:
                raise ValidationError("No id found")
            candidate = Candidate.objects.filter(id=id)
            if candidate.exists():
                candidate.delete()
                return Response({"message":"Candidate successfully deleted"}, status=HTTP_200_OK)
        except ValidationError as e:
            return Response({"message":str(e)},HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(data={"message":"something went wrong"},status=HTTP_500_INTERNAL_SERVER_ERROR)
        




@api_view(['GET'])
def search(request):
    try:
        # Get the search query from request parameters
        search_query = request.query_params.get("search_candidate", "").strip()

        # Validate the search query
        if not search_query:
            return Response(
                {"error": "search_candidate parameter is required and cannot be empty."},
                status=HTTP_400_BAD_REQUEST
            )

        words = search_query.split()

        # Build a filter to include only candidates with at least one matching word
        q_filter = Q()
        for word in words:
            q_filter |= Q(name__icontains=word)

        queryset = Candidate.objects.filter(q_filter)

        # Build a relevancy score: add 1 for each word found in the candidate's name
        relevancy_annotation = None
        for word in words:
            case = Case(
                When(name__icontains=word, then=Value(1)),
                default=Value(0),
                output_field=IntegerField()
            )
            # If it's the first word, initialize the relevancy annotation; else, add to it.
            relevancy_annotation = case if relevancy_annotation is None else relevancy_annotation + case

        # Annotate the queryset with the computed relevancy score
        queryset = queryset.annotate(relevancy=relevancy_annotation)

        # Order results: highest relevancy first, then alphabetically by name
        queryset = queryset.order_by('-relevancy', 'name')

        serialized_data = Candidate_serializer(queryset, many=True).data

        return Response({"results": serialized_data}, status=HTTP_200_OK)

    except Exception as e:
        return Response(
            {"error": "Something went wrong", "details": str(e)},
            status=HTTP_500_INTERNAL_SERVER_ERROR
        )