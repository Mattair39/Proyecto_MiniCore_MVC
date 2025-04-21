from rest_framework import serializers
from .models import Employee, Project, Task

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Employee
        fields = ['id', 'first_name', 'last_name']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Project
        fields = ['id', 'name']

class TaskSerializer(serializers.ModelSerializer):
    employee = serializers.SerializerMethodField()
    project  = serializers.SerializerMethodField()

    id_employee = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all()
    )
    id_project = serializers.PrimaryKeyRelatedField(
        queryset=Project.objects.all()
    )

    class Meta:
        model  = Task
        fields = [
            'id',
            'employee',       
            'project',        
            'description',
            'date_start',
            'estimate_time',
            'status',
            'id_employee',    
            'id_project',     
        ]

    def get_employee(self, obj):
        return f"{obj.id_employee.first_name} {obj.id_employee.last_name}"

    def get_project(self, obj):
        return obj.id_project.name
