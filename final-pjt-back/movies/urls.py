from django.urls import path
from . import views

appnames = 'movies'

urlpatterns = [
    path('', views.index),
    path('genres/', views.genres),
]
