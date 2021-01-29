from articles.serializers.common import ArticleSerializer
from ..serializers.common import ArticleTypeSerializer

class PopulatedArticleTypeSerializer(ArticleTypeSerializer):

  articles = ArticleSerializer(many=True)