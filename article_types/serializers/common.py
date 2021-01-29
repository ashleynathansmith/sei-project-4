from rest_framework import serializers
from ..models import ArticleType

class ArticleTypeSerializer(serializers.ModelSerializer):

  class Meta:
    model = ArticleType
    fields = '__all__'