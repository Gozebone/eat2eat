from django.core import serializers
from django.shortcuts import render
from ..products.models import Product
from ..products.choices import *
import json
# Create your views here.


def home_view(request, *args, **kwargs):
    context = {
        'products': serializers.serialize("json", Product.objects.all()),
        'products_labels': json.dumps(dict(TYPE_CHOICES)),
    }
    return render(request, "home.html", context)

