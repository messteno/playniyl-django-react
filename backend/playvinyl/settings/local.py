from base import *

SECRET_KEY = 'coui!o98r$^ks)x40h%6n)&u$i54v((#g$u=#2x2&6a!)6-89l'

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'playvinylreact',
        'USER': 'playvinyl',
        'PASSWORD': 'playvinyl',
    }
}

