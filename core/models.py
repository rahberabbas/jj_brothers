from django.db import models

class Category(models.Model):
    category = models.CharField(max_length=256, null=True, blank=True) 
    
    def __str__(self):
        return self.category

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=256, null=True, blank=True)
    discrimination = models.CharField(max_length=256, null=True, blank=True)
    company = models.CharField(max_length=256, null=True, blank=True)
    price = models.CharField(max_length=256, null=True, blank=True)
    image = models.ImageField(upload_to ='uploads/', blank=True)

    def __str__(self):
        return self.name