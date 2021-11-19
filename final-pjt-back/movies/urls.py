from django.urls import path
from . import views

appnames = 'movies'

urlpatterns = [
    path('', views.index),
    # path('detail/<int:movie_pk>/', views.detail),
]
