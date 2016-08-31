
DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    # ('Your Name', 'your_email@example.com'),
)

MANAGERS = ADMINS
#SOUTH_DATABASE_ADAPTERS = {'default':'south.db.psycopg2'}
# DATABASES = {
    # 'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',  # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        # 'NAME': 'db.sqlite3',                      # Or path to database file if using sqlite3.
        # 'USER': '',
        # 'PASSWORD': '',
        # 'HOST': '',                      # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        # 'PORT': '',                      # Set to empty string for default.
    # }
# }
DATABASES = {
    'default': {
        'HOST': 'localhost',   #Host name
        'NAME': 'auth_data',     # Database name
        'ENGINE': 'django.db.backends.postgresql',  # postgres driver name
        'USER': 'postgres',
        'PASSWORD': '21198321mm',
    }
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'America/Denver'

# Absolute filesystem path to the directory that will hold user-uploaded files.

# Example: "/var/www/example.com/media/"
MEDIA_ROOT = ''

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash.
# Examples: "http://example.com/media/", "http://media.example.com/"
MEDIA_URL = ''

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/var/www/example.com/static/"
STATIC_ROOT = ''

# URL prefix for static files.
# Example: "http://example.com/static/", "http://static.example.com/"
STATIC_URL = '/static/'

# Additional locations of static files
STATICFILES_DIRS = (
    # Put strings here, like "/home/html/static" or "C:/www/django/static".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
)

# Make this unique, and don't share it with anybody.
#SECRET_KEY = 'u^xf+2cz5ikm-e7x_p^5f7gwr_mq9)+-yb92dwlo=ocf_=eied'

DEBUG_APPS = ()

CORS_ORIGIN_WHITELIST = (
    'localhost:8000',
    '192.168.2.174:8000'
    'localhost/',
    '192.168.2.174/',
)
