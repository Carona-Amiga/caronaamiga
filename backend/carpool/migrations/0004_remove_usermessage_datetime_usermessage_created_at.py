# Generated by Django 4.0.5 on 2022-06-23 22:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('carpool', '0003_usermessage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermessage',
            name='datetime',
        ),
        migrations.AddField(
            model_name='usermessage',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]