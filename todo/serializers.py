from rest_framework import serializers
from .models import Todo 

class TodoSerializer(serializers.ModelSerializer):
    class Meta:  # Capitalize 'Meta'
        model = Todo
        fields = ('id', 'title', 'description', 'completed')  # Correct the attribute to 'fields', and pluralize it
