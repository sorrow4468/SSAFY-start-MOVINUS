from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    password = request.data.get('password')
    password_confirmation = request.data.get('passwordConfirmation')
    # like_genres = request.data.get('likeGenres')
    # person = get_object_or_404(get_user_model(),username=request.data.get('username'))

    # for like_genre in like_genres:
    #     if like_genre['isLiked'] == True:
    #         person.like_genres.add(like_genre['id'])
            
            

    if password != password_confirmation:
        return Response({'error': '비밀번호가 일치하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        user.set_password(request.data.get('password'))
        # user.set_password(password)
        user.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)