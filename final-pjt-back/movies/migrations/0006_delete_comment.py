# Generated by Django 3.2.9 on 2021-11-21 05:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0005_rename_author_comment_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Comment',
        ),
    ]