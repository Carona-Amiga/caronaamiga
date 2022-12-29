from models import Carpool
from django.db.models.manager import BaseManager


def get_carpool_service(carpools: BaseManager[Carpool], carpool_filter: dict):
    check_origin = carpool_filter["check_origin"]
    check_destination = carpool_filter["check_destination"]
    check_time = carpool_filter["check_time"]
    check_days = carpool_filter["check_days"]
    limit = carpool_filter["limit"]

    if check_origin:
        carpools = carpools.filter(
            start_address__area__contains=check_origin)

    if check_destination:
        carpools = carpools.filter(
            destination_address__area__contains=check_destination)

    if check_time:
        hour = check_time.split(':')[0]

        carpools = carpools.filter(
            time__hour=hour
        )

    if check_days:
        carpools = carpools.filter(
            days=check_days
        )

    carpools = carpools.order_by('-created_at')[:limit]

    return carpools
