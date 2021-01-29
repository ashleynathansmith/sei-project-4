from django.urls import path
from .views import ArticleTypeListView

urlpatterns = [
  path('', ArticleTypeListView.as_view())
]