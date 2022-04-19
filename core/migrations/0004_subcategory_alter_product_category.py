# Generated by Django 4.0.3 on 2022-04-19 10:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_product_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_category', models.CharField(blank=True, max_length=256, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.category')),
            ],
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.subcategory'),
        ),
    ]