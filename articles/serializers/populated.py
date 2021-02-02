from comments.serializers.populated import PopulatedCommentSerializer
from article_types.serializers.common import ArticleTypeSerializer
from ..serializers.common import ArticleSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedArticleSerializer(ArticleSerializer):

  comments = PopulatedCommentSerializer(many=True)
  types = ArticleTypeSerializer(many=True)
  owner = UserSerializer()
  favorites = UserSerializer(many=True)