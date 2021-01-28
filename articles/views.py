from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Article
from .serializers.common import ArticleSerializer
from .serializers.populated import PopulatedArticleSerializer

class ArticleListView(APIView):

  def get(self, _request):
    articles = Article.objects.all()
    serialized_article = PopulatedArticleSerializer(articles, many=True)
    return Response(serialized_article.data, status=status.HTTP_200_OK)

  def post(self, request):
    article_to_create = ArticleSerializer(data=request.data)
    if article_to_create.is_valid():
      article_to_create.save()
      return Response(article_to_create.data, status=status.HTTP_201_CREATED)
    return Response(article_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ArticleDetailView(APIView):

  def get_article(slef, pk):
    try:
      return Article.objects.get(pk=pk)
    except Article.DoesNotExist:
      raise NotFound()

  def get(self, _request, pk):
    article = self.get_article(pk=pk)
    serialized_article = PopulatedArticleSerializer(article)
    return Response(serialized_article.data, status=status.HTTP_200_OK)

  def put(self, request, pk):
    article_to_update = self.get_article(pk=pk)
    updated_article = ArticleSerializer(article_to_update, data=request.data)
    if updated_article.is_valid():
      updated_article.save()
      return Response(updated_article.data, status=status.HTTP_202_ACCEPTED)
    return Response(updated_article.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

  def delete(self, _request, pk):
    article_to_delete = self.get_article(pk=pk)
    article_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  