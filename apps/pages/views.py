from django.shortcuts import render
from ..products.models import Product
# Create your views here.


def home_view(request, *args, **kwargs):
    context = {
        'products': Product.objects.all(),
    }
    return render(request, "home.html", context)

