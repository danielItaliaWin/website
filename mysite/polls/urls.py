from django import views
from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'),
    path('templates/', views.move_to_results, name='move_to_results'),
    path('results/',views.redirect_results,name='resluts' ),

    path('ajax_value/', views.ajax_value, name='ajax_value'),
    path('ajax_sendOrigin/', views.ajax_Getorigin, name='ajax_Getorigin'),
    path('ajax_sendOpen/', views.ajax_getOpen, name='ajax_getOpen'),
    path('ajax_sendFind/',views.ajax_TapSearchBtn,name='ajax_TapSearchBtn')
]