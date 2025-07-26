from django.db import models
from django.utils.text import slugify
from cloudinary.models import CloudinaryField

class Role(models.Model):
    name = models.CharField(max_length=30, unique=True)
    slug = models.SlugField(max_length=30, unique=True, blank=True)
    image = models.ImageField(upload_to='role/')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Agent(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True, blank=True)  # Додай це поле
    # image = models.ImageField(upload_to='agents/') 
    image = CloudinaryField('image') 
    role = models.ForeignKey(Role, related_name='agents', on_delete=models.CASCADE, null=True)
    description = models.TextField()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name




