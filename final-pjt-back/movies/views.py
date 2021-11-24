from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import GenreSerializer, MovieSerializer
from .models import Genre, Movie


# from django.core.paginator import Paginator
# from django.core import serializers
# from django.http import HttpResponse
# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def index(request):
    if request.method == 'GET':
        # movies = Movie.objects.order_by('?')[:20]
        movies = Movie.objects.order_by('?')
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# @api_view(['GET'])
# @permission_classes([AllowAny])
# def index(request):
#     if request.method == 'GET':
#         # movies = Movie.objects.order_by('?')[:20]
#         movies = Movie.objects.order_by('?')
#         paginator = Paginator(movies, 21)

#         page_number = request.GET.get('page')
#         page_obj = paginator.get_page(page_number)

#         if request.headers.get('x-requested-with') == 'XMLHttpRequest':
#             data = serializers.serialize('json', page_obj)
#             return HttpResponse(data, content_type='application/json')
#         else:
#             serializer = MovieSerializer(page_obj, many=True)
#             return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def detail(request, movie_pk):
    if request.method == 'GET':
        movie = get_object_or_404(Movie,pk=movie_pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['GET'])
@permission_classes([AllowAny])   
def genres(request):
    if request.method == 'GET':
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])   
def genre_filter(request, genre_pk):
    if request.method == 'GET':
        genre_movies = Movie.objects.filter(genres__in=[genre_pk])
        serializer = MovieSerializer(genre_movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
