from django.db import models


# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=50)
    img = models.ImageField(upload_to='products/')
