from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from task.api_views import EmployeeViewSet, ProjectViewSet, TaskViewSet

router = routers.DefaultRouter()
router.register(r'employees', EmployeeViewSet)
router.register(r'projects',  ProjectViewSet)
router.register(r'tasks',     TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
