# from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from .serializers import MovieSerializer
from .models import Movie


# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def index(request):
    if request.method == 'GET':
        # movies = Movie.objects.order_by('?')[:20]
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
        
# def detail(request, movie_pk):
#     movie = get_object_or_404(Movie, pk=movie_pk)
#     movie_genres = movie.genres.all()
#     context = {
#         'movie': movie,
#         'movie_genres': movie_genres,
#     }
#     return render(request, 'movies/detail.html',context)
