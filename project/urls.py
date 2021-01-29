from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/articles/', include('articles.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/types/', include('article_types.urls')),
    path('api/auth/', include('jwt_auth.urls'))
]
