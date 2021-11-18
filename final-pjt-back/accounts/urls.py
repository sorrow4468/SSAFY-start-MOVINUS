from django.urls import path
from . import views

appnames = 'accounts'

urlpatterns = [
    path('signup/', views.signup),
]
