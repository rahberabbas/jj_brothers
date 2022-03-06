from django.shortcuts import render
from .models import Product, Category
from django.views.generic import View

def index(request):
    mobile = Product.objects.filter(category = 1)[:4]
    watch = Product.objects.filter(category = 2)[:4]
    tem_gla = Product.objects.filter(category = 5)[:4]
    return render(request, 'index.html', {'mobile': mobile, 'watch': watch, 'tem_gla': tem_gla})

def detail(request):
    return render(request, 'details.html')

class ProductDetailView(View):
    def get(self, request, pk):
        product = Product.objects.get(pk=pk)
        return render(request, 'detail.html', {'product': product})

def mobile(request):
    prod = Product.objects.all()
    return render(request, 'mobile.html', {'prod': prod})

def contact(request):
    return render(request, 'contact.html')