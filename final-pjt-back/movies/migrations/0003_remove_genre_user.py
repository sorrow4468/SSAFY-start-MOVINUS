# Generated by Django 3.2.9 on 2021-11-20 06:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_genre_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='genre',
            name='user',
        ),
    ]