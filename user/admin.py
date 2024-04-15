from django.contrib import admin
from user.models import User, Data
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'username', 'password')
    search_fields = ['username', 'first_name', 'last_name']
    list_filter = ['email', 'username']


admin.site.register(User, UserAdmin)
admin.site.register(Data)
