from django.conf.urls import url, patterns, include
from rest_framework.urlpatterns import format_suffix_patterns
#from django.contrib import admin
from dauth import views

#admin.autodiscover()

urlpatterns = [
    #url(r'api/login/$', views.login.as_view()),
    url(r'api/login/$', 'dauth.views.login'),
    #url(r'^admin/', admin.site.urls),
    #url(r'^admin/', include(admin.site.urls),
    url(r'^api/register/$', 'dauth.views.register'),
    url(r'^api/login$', 'dauth.views.login'),
    url(r'^api/logout/$', 'dauth.views.logout'),
]

urlpatterns = format_suffix_patterns(urlpatterns)