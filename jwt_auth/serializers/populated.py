from articles.serializers.common import ArticleSerializer
from comments.serializers.common import CommentSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_articles = ArticleSerializer(many=True)
    posted_comments = CommentSerializer(many=True)
    favorited_articles = ArticleSerializer(many=True)