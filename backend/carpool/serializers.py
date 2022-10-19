from rest_framework import serializers

from carpool.models import Carpool, Profile, UserMessage


class CarpoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carpool

        # Show all fields
        fields = '__all__'

        # Include nested relationship (One-to-one, one-to-many, many-to-many)
        depth = 1


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        depth = 1


class UserMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMessage
        fields = '__all__'
        depth = 1
