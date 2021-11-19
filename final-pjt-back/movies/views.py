from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializers import GenreSerializer, MovieSerializer
from .models import Genre, Movie

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def index(request):
    if request.method == 'GET':
        # movies = Movie.objects.order_by('?')[:20]
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])   
def genres(request):
    if request.method == 'GET':
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])   
def genre_filter(request, genre_pk):
    if request.method == 'GET':
        genre_movies = Movie.objects.filter(genres__in=[genre_pk])
        serializer = MovieSerializer(genre_movies, many=True)
        return Response(serializer.data)
