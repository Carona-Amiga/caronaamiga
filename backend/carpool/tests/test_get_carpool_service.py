from carpool.service import get_carpool_service
from models import Carpool, User, Profile, Address
import datetime


def test_should_list_carpools_correctly():
    user = User.objects.create_user("testing", "testing@email.com", "testing")
    profile = Profile(
        name="testing",
        cpf="0000",
        driver_license_number="000",
        phone_number="000",
        email="testing@email.com",
        username="testing_carpool",
        bio="i like testing",
        account=user
    )

    start_address = Address(
        city="Parnamirim",
        state="RN",
        area="Nova Parnamirim",
        street="Avenida Maria Lacerdo Montenegro",
        number=98
    )

    destination_address = Address(
        city="Natal",
        state="RN",
        area="Cidade Alta",
        street="Rua Antônio pegado",
        number=200
    )

    time = datetime.time(12, 0, 0)

    carpool_1 = Carpool(
        name="Carpool For Testing",
        time=time,
        description="This is a carpool for testing",
        free_seats=2,
        days=27,
        driver=profile,
        start_address=start_address,
        destination_address=destination_address
    )

    carpools = [carpool_1]
    carpool_filter = {
        "check_origin": "São Gonçalo do Amarante",
    }

    carpools = get_carpool_service(
        carpools=carpools,
        carpool_filter=carpool_filter
    )

    assert len(carpools) == 0
