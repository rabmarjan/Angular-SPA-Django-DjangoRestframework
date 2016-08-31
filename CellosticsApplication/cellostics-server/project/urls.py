from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = [url(r'^admin/', include(admin.site.urls)),
               url(r'^', include('app.urls')),
               url(r'^', include('dauth.urls')),
               ]
