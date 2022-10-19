from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.authtoken.views import obtain_auth_token
from . import views


schema_view = get_schema_view(
    openapi.Info(
        title="Carona Amiga API",
        default_version='v1',

    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

websocket_urlpatterns = [
    path('', views.ChatConsumer.as_asgi())
]

urlpatterns = [
    path('', views.exampleJson),
    path('docs/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('carpool', views.CarpoolView.as_view()),
    path('user', views.ProfileView.as_view()),
    path('user/driver', views.RecentDriversView.as_view()),
    path('user-message', views.UserMessageView.as_view()),
    path('user-message/<int:id>', views.UserMessageByUserView.as_view()),
    path('user-message/secondary-user/<int:s_user_id>',
         views.UserMessageWithUserView.as_view()),
    path('user-message/user', views.UserMessageUsersView.as_view()),
    path('api-token', obtain_auth_token),
    path('session', views.SessionView.as_view()),
    path('logout', views.LogoutView.as_view())
]
