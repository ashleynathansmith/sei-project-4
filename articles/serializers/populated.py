from comments.serializers.common import CommentSerializer
from ..serializers.common import ArticleSerializer

class PopulatedArticleSerializer(ArticleSerializer):

  comments = CommentSerializer(many=True)