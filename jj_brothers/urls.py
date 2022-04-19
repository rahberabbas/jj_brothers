from django.contrib import admin
from django.urls import path
from core.views import index, ProductDetailView, mobile, contact, search
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('products/', mobile, name='products'),
    path('contact-us/', contact, name='contact'),
    path('detail/<int:pk>', ProductDetailView.as_view(),name="detail"),
    path('search/', search, name='search'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
