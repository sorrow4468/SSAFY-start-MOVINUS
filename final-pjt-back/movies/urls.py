from django.urls import path
from . import views

appnames = 'movies'

urlpatterns = [
    path('', views.index),
    path('detail/<int:movie_pk>/', views.detail),
    path('genres/', views.genres),
    path('genres/<int:genre_pk>/', views.genre_filter),
]
