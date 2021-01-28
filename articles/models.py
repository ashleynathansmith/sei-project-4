from django.db import models

# Create your models here.
class Article(models.Model):
  headline = models.CharField(max_length=300)
  description = models.CharField(max_length=5000)
  image = models.CharField(max_length=200)
  created_at = models.DateTimeField(auto_now_add=True)
  is_Promoted = models.BooleanField(default=False)

  def __str__(self):
        return f"{self.headline} - {self.created_at}"