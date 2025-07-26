from django.db import models
from django.contrib.auth.models import AbstractUser
from cloudinary.models import CloudinaryField


class User(AbstractUser):
    image = CloudinaryField('image', folder='users_image', blank=True, null=True)
    
    
    class Meta:
        db_table = 'user'
    
    
    def __str__(self):
        return self.username
    