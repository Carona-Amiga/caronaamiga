from drf_yasg import openapi

from carpool.serializers import CarpoolSerializer

# Carpool list parameters (query parameters)
query_parameters = [
    openapi.Parameter(
        'origin',
        in_=openapi.IN_QUERY,
        type=openapi.TYPE_STRING,
    ),
    openapi.Parameter(
        'destination',
        in_=openapi.IN_QUERY,
        type=openapi.TYPE_STRING,
    ),
    openapi.Parameter(
        'time',
        in_=openapi.IN_QUERY,
        type=openapi.TYPE_STRING,
    ),
    openapi.Parameter(
        'days',
        in_=openapi.IN_QUERY,
        type=openapi.TYPE_STRING,
    )
]

# List operation (GET) response
list_responses = {
    '200': CarpoolSerializer.many_init(),
    '500': openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'error': openapi.Schema(
                title='message',
                default='Algum erro ocorreu internamente. Tente novamente.',
                type=openapi.TYPE_STRING
            )
        }
    )
}

# Create operation (POST) request body
create_request_body = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties={
        'name': openapi.Schema(type=openapi.TYPE_STRING),
        'time': openapi.Schema(type=openapi.TYPE_STRING),
        'description': openapi.Schema(type=openapi.TYPE_STRING),
        'free_seats': openapi.Schema(type=openapi.TYPE_INTEGER),
        'days': openapi.Schema(type=openapi.TYPE_INTEGER),
        'start_address_state': openapi.Schema(type=openapi.TYPE_STRING),
        'start_address_city': openapi.Schema(type=openapi.TYPE_STRING),
        'start_address_area': openapi.Schema(type=openapi.TYPE_STRING),
        'start_address_street': openapi.Schema(type=openapi.TYPE_STRING),
        'start_address_number': openapi.Schema(type=openapi.TYPE_INTEGER),
        'destination_address_state': openapi.Schema(type=openapi.TYPE_STRING),
        'destination_address_city': openapi.Schema(type=openapi.TYPE_STRING),
        'destination_address_area': openapi.Schema(type=openapi.TYPE_STRING),
        'destination_address_street': openapi.Schema(type=openapi.TYPE_STRING),
        'destination_address_number': openapi.Schema(type=openapi.TYPE_INTEGER)
    }
)

# Create operation (POST) response
create_responses = {
    '200': CarpoolSerializer,
    '500': openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'error': openapi.Schema(
                title='message',
                default='Algum erro ocorreu internamente. Tente novamente.',
                type=openapi.TYPE_STRING
            )
        }
    )
}
