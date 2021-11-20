from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import CommentSerializer, GenreSerializer, MovieSerializer
from .models import Genre, Movie, Comment

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def index(request):
    if request.method == 'GET':
        # movies = Movie.objects.order_by('?')[:20]
        movies = Movie.objects.order_by('?')[:30]
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def detail(request, movie_pk):
    if request.method == 'GET':
        movie = get_object_or_404(Movie,pk=movie_pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def comment_create(request, movie_pk):
    movie = get_object_or_404(Movie,pk=movie_pk)
    if request.method == 'GET':
        comments = movie.comment_set.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie,user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT','DELETE'])    
def comment_update_or_delete(request, comment_pk):
    comment = get_object_or_404(Comment,pk=comment_pk)
    if request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        serializer = CommentSerializer(comment)
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
