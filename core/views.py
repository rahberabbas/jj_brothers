from itertools import product
from unicodedata import category
from django.shortcuts import render
from .models import Product, Category, SubCategory
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
    cat = Category.objects.all()
    sub_cat = SubCategory.objects.all()
    
    categoryID = request.GET.get('category')
    if categoryID:
        prod = Product.objects.filter(category = categoryID)
    else:
        prod = Product.objects.all()
    return render(request, 'mobile.html', {'prod': prod, 'cat': cat, 'sub_cat': sub_cat})

def contact(request):
    return render(request, 'contact.html')

def search(request):
    q = request.GET['q']
    cat = Category.objects.all()
    sub_cat = SubCategory.objects.all()
    product = Product.objects.filter(name__icontains=q)
    return render(request, 'search.html',{
        'prod': product, 'q':q, 'cat': cat, 'sub_cat': sub_cat})