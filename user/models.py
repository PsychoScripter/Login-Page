from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    numbers = models.IntegerField(default=0)
    email = models.EmailField()
    timestamp = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=8)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.username


class Data(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    links = models.CharField(max_length=32)

    def __str__(self):
        return self.links
