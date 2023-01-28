from django.test import TestCase
from carpool.models import Profile, User


class ProfileTestCase(TestCase):
    def setUp(self):
        email = "matheus@email.com"

        user = User.objects.create(
            username="matheus", email=email, password="senha")
        Profile.objects.create(
            name="Matheus Oliveira",
            cpf="03104277036",
            email=email,
            account=user
        )

    def test_can_create_profile(self):
        profile = Profile.objects.get(name="Matheus Oliveira")

        self.assertEqual(profile.name, "Matheus Oliveira")
