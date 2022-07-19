import json
from django.shortcuts import render
from ..products.models import Product
# Create your views here.


def home_view(request, *args, **kwargs):
    context = {
        'products': json.dumps(Product.objects.all()[0]),
    }
    return render(request, "home.html", context)

