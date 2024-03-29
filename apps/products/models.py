from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from apps.products.choices import *

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=30)
    price = models.DecimalField(decimal_places=2, max_digits=50)
    img = ProcessedImageField(upload_to='products/',
                              processors=[ResizeToFill(640,480)],
                              format='JPEG',
                              options={'quality': 100})
    type = models.CharField(max_length=2, choices=TYPE_CHOICES)
    composition = models.TextField(blank=True)

    def __str__(self):
        return self.title
