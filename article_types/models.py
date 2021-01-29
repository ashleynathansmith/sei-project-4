from django.db import models

class ArticleType(models.Model):
  name = models.CharField(max_length=20)

  def __str__(self):
    return self.name
