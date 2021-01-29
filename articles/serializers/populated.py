from comments.serializers.common import CommentSerializer
from article_types.serializers.common import ArticleTypeSerializer
from ..serializers.common import ArticleSerializer

class PopulatedArticleSerializer(ArticleSerializer):

  comments = CommentSerializer(many=True)
  types = ArticleTypeSerializer(many=True)