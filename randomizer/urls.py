from django.urls import path
from . import views


app_name = 'randomizer'

urlpatterns = [
    path('', views.randomizer_view, name='random'),
    # path('class/<str:character_class>/', views.rrandomizer_by_class, name='randomizer_by_class'),
]
