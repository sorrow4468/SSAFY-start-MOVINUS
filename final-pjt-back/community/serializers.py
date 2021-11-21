from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Review,Comment


class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('title',)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id','title','content','rank',)


class CommentSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ('review','id','content',)