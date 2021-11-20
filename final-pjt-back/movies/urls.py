from django.urls import path
from . import views

appnames = 'movies'

urlpatterns = [
    path('', views.index),
    path('detail/<int:movie_pk>/', views.detail),
    
    # 댓글 목록, 생성
    path('detail/<int:movie_pk>/comments/', views.comment_create),
    
    # 댓글 수정, 삭제
    path('comments/<int:comment_pk>/', views.comment_update_or_delete),
    path('genres/', views.genres),
    path('genres/<int:genre_pk>/', views.genre_filter),
]
