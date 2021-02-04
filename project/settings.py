import django_on_heroku
import os
from pathlib import Path
from dotenv import load_dotenv
import dj_database_url
load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


if str(os.getenv('ENVIRONMENT')) == 'development':
    SECRET_KEY = 'va@w$r=j0jsh2^mnfx4xslr$2ee!3sxe)ud+!2fpr6k@tky+4h' # should be whatever your original key was
else:
    SECRET_KEY = str(os.getenv('SECRET_KEY'))

DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'articles',
    'comments',
    'article_types',
    'jwt_auth',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'client')
                ]  #Look, we have added the root folder of frontend here
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project.wsgi.application'


DATABASES = {}
if str(os.getenv('ENVIRONMENT')) == 'development':
    DATABASES['default'] =  {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'not-fake-news-db', # < --- make sure you chage this
        'HOST': 'localhost',
        'PORT': 5432
    }
else:
    DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

AUTH_USER_MODEL = 'jwt_auth.User'

REST_FRAMEWORK = {  
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'jwt_auth.authentication.JWTAuthentication'
    ],
}

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'client', "build", "static"),
)

django_on_heroku.settings(locals())
