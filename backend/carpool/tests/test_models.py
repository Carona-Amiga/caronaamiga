import unittest
from models import Profile


class TestProfile(unittest.TestCase):
    def test_name(self):
        self.assertEqual(Profile.name(), 'João')

    def test_cpf(self):
        self.assertEqual(Profile.cpf(), 11122233310)


if __name__ == '__main__':
    unittest.main()