from django.db import models

# Create your models here.
class Article(models.Model):
  headline = models.CharField(max_length=300)
  description = models.CharField(max_length=5000)
  image = models.CharField(max_length=200)
  date = models.DateField()

  def __str__(self):
        return f"{self.headline} - {self.date}"