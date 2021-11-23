from rest_framework import serializers
from .models import Review,Comment


# class ReviewListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Review
#         fields = ('id','title','user',)
#         read_only_field = ('user',)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        # fields = ('id','title','content','rank',)
        read_only_fields = ('user','movie')
        depth = 1
        

class CommentSerializer(serializers.ModelSerializer):
    # review = ReviewSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('user','review','created_at','updated_at')
        depth = 1
