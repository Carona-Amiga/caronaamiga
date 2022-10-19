from drf_yasg import openapi

from carpool.serializers import ProfileSerializer


list_responses = {
    '200': ProfileSerializer.many_init(),
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

create_responses = {
    '200': ProfileSerializer,
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

create_request_body = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties={
        'name': openapi.Schema(type=openapi.TYPE_STRING),
        'cpf': openapi.Schema(type=openapi.TYPE_STRING),
        'driver_license': openapi.Schema(type=openapi.TYPE_STRING),
        'phone_number': openapi.Schema(type=openapi.TYPE_STRING),
        'email': openapi.Schema(type=openapi.TYPE_STRING),
        'username': openapi.Schema(type=openapi.TYPE_STRING),
        'bio': openapi.Schema(type=openapi.TYPE_STRING),
        'password': openapi.Schema(type=openapi.TYPE_STRING),
    }
)
