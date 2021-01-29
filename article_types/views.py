from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.populated import PopulatedArticleTypeSerializer
from .models import ArticleType

class ArticleTypeListView(APIView):

  def get(self, _request):
    article_types = ArticleType.objects.all()
    serialized_article_types = PopulatedArticleTypeSerializer(article_types,many=True)
    return Response(serialized_article_types.data, status=status.HTTP_200_OK)