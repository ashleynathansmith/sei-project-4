from django.db import models

# Create your models here.
class Article(models.Model):
  headline = models.CharField(max_length=300)
  subheadline = models.CharField(max_length=1000)
  description = models.CharField(max_length=5000)
  image = models.CharField(max_length=200)
  created_at = models.DateTimeField(auto_now_add=True)
  is_Promoted = models.BooleanField(default=False)
  types = models.ManyToManyField('article_types.ArticleType', related_name='articles')
  owner = models.ForeignKey(
    'jwt_auth.User',
    related_name='created_articles',
    on_delete=models.CASCADE
  )
  favorites = models.ManyToManyField(
    'jwt_auth.User',
    related_name="favorited_articles",
    blank=True
  )
  

  def __str__(self):
        return f"{self.headline} - {self.created_at}"