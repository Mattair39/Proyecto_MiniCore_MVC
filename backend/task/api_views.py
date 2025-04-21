from rest_framework import viewsets
from .models import Employee, Project, Task
from .serializers import EmployeeSerializer, ProjectSerializer, TaskSerializer
from django.utils.dateparse import parse_date

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        qs = Task.objects.all()
        start = self.request.query_params.get('date_start')
        end   = self.request.query_params.get('date_end')
        if start and end:
            ds = parse_date(start)
            de = parse_date(end)
            if ds and de:
                qs = qs.filter(date_start__range=[ds, de])
        return qs
