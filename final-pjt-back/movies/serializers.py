from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Comment, Genre, Movie

class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('id', 'name',)

class CommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('author_id','content','rank','updated_at',)

class CommentSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ('movie','author_id','content','rank','updated_at',)