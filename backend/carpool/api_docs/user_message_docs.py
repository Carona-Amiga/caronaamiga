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

create_request_body = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties={
        "content": openapi.Schema(type=openapi.TYPE_STRING),
        "receiver": openapi.Schema(type=openapi.TYPE_INTEGER),
        "sender": openapi.Schema(type=openapi.TYPE_INTEGER),
        "carpool": openapi.Schema(type=openapi.TYPE_INTEGER)
    }
)

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
