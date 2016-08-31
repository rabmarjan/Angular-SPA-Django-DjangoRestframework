from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns
from app import views

urlpatterns = [url(r'^addresses$', views.AddressList.as_view(), name='address-list'),
               url(r'^addresses/(?P<pk>[0-9]+)$', views.AddressDetail.as_view(), name='address-detail'),
               url(r'^accounts$', views.AccountList.as_view(), name='account-list'),
               url(r'^accounts/(?P<pk>[0-9]+)$', views.AccountDetail.as_view(), name='account-detail'),
               url(r'^billcollection$', views.BillCollectionList.as_view(), name='billcollection-list'),
               url(r'^billcollection/(?P<pk>[0-9]+)$', views.BillCollectionDetail.as_view(), name='billcollection-detail'),
               # url(r'^accountReport$', views.AccountListReport.as_view(), name='account-list-Report'),
               url(r'^accountReport$', 'app.views.AccountListReport'),
               url(r'^movies$', views.MovieList.as_view(), name='movie-list'),
               url(r'^movies/(?P<pk>[0-9]+)$', views.MovieDetail.as_view(), name='movie-detail'),
               url(r'^users$', views.UserList.as_view(), name='user-list'),
               url(r'^users/(?P<pk>[0-9]+)$', views.UserDetail.as_view(), name='user-detail'),
               url(r'^custom/get/$', views.CustomGet.as_view()),
               url(r'^custom/post/$', views.ShareView.as_view()),
               url(r'^custom_list/', views.Custom_list.as_view()),
               url(r'^custom_detail/(?P<pk>[0-9]+)/$', views.Custom_detail.as_view()),
              ]

# urlpatterns += [
#     url(r'^api-token-auth/', 'rest_framework.authtoken.views.obtain_auth_token')
# ]
urlpatterns = format_suffix_patterns(urlpatterns)
