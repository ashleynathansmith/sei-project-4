from django.urls import path
from .views import ArticleListView, ArticleDetailView, ArticleFavoriteView

urlpatterns = [
  path('', ArticleListView.as_view()),
  path('<int:pk>/', ArticleDetailView.as_view()),
  path('<int:pk>/favorite/', ArticleFavoriteView.as_view())
]
