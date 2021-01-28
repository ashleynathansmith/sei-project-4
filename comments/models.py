from django.db import models

class Comment(models.Model):
  text = models.TextField(max_length=300)
  created_at = models.DateField(auto_now_add=True)
  article = models.ForeignKey(
    "articles.Article",
    related_name="comments",
    on_delete=models.CASCADE
  )
  
  def __str__(self):
    return f"Comment - {self.id} on article - {self.article}"