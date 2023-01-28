from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    name = models.CharField(max_length=50)
    cpf = models.CharField(max_length=11)
    photo = models.CharField(
        max_length=100, default='/carpool/assets/profile/avatar.png')
    driver_license_number = models.CharField(max_length=11)
    phone_number = models.CharField(max_length=11, blank=True)
    is_driver = models.BooleanField(default=False)
    email = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    bio = models.CharField(max_length=400, blank=True)
    rating = models.FloatField(default=5.0)
    created_at = models.DateTimeField(auto_now_add=True)
    account = models.OneToOneField(
        User, on_delete=models.DO_NOTHING, related_name='profile')

    def __str__(self):
        return self.username


class Address(models.Model):
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=2)
    street = models.CharField(max_length=100)
    number = models.IntegerField()
    area = models.CharField(max_length=30)

    def __str__(self):
        return (f"{self.street} nº{self.number},"
                "{self.area}, {self.city} - {self.state}")


class Carpool(models.Model):
    name = models.CharField(max_length=50)
    time = models.TimeField()
    description = models.CharField(max_length=400)
    days = models.IntegerField()
    free_seats = models.IntegerField()
    driver = models.ForeignKey(
        Profile, on_delete=models.SET_NULL, related_name='carpool_owned',
        null=True)
    passengers = models.ManyToManyField(
        Profile, related_name='carpool', blank=True)
    start_address = models.ForeignKey(
        Address, on_delete=models.SET_NULL,
        related_name='carpool_as_start_addr', null=True)
    destination_address = models.ForeignKey(
        Address, on_delete=models.SET_NULL,
        related_name='carpool_as_dest_addr',
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UserMessage(models.Model):
    content = models.TextField()
    receiver = models.ForeignKey(
        Profile,
        on_delete=models.SET_NULL,
        related_name='message_received',
        null=True
    )
    sender = models.ForeignKey(
        Profile,
        on_delete=models.SET_NULL,
        related_name='message_sent',
        null=True
    )
    carpool = models.ForeignKey(
        Carpool,
        on_delete=models.SET_NULL,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
