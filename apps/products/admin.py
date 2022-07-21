from django.contrib import admin
from .models import Product
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = list(vars(Product).keys())

admin.site.register(Product, ProductAdmin)
