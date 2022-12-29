from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import IsAuthenticated

from channels.generic.websocket import JsonWebsocketConsumer
from asgiref.sync import async_to_sync

from django.contrib.auth.models import User

from carpool.models import Address, Carpool, Profile, UserMessage
from carpool.permissions import OnlyCreate
from carpool.serializers import CarpoolSerializer, ProfileSerializer
from carpool.serializers import UserMessageSerializer

from django.db.models import Q

from carpool.api_docs import carpool_docs, profile_docs, user_message_docs

from service import get_carpool_service


@api_view()
def exampleJson(request):
    return Response({"message": "Hello World"}, status=status.HTTP_200_OK)


"""
View to list with filtering option and create Carpool.
"""


class CarpoolView(APIView):
    @swagger_auto_schema(
        operation_description='GET Listar caronas',
        operation_summary='Listar caronas em JSON',
        manual_parameters=carpool_docs.query_parameters,
        tags=['Carpool'],
        responses=carpool_docs.list_responses
    )
    def get(self, request):
        try:
            carpools = Carpool.objects.all()

            # Check for query params or set to None
            check_origin = request.query_params.get('origin', None)
            check_destination = request.query_params.get('destination', None)
            check_time = request.query_params.get('time', None)
            check_days = request.query_params.get('days', None)
            limit = request.query_params.get('limit', 4)

            carpool_filter = {
                "check_origin": check_origin,
                "check_destination": check_destination,
                "check_time": check_time,
                "check_days": check_days,
                "limit": limit
            }

            carpools = get_carpool_service(
                carpools=carpools,
                carpool_filter=carpool_filter
            )

            # If any of the query params is not None, filter it
            # if check_origin:
            #     carpools = carpools.filter(
            #         start_address__area__contains=check_origin)

            # if check_destination:
            #     carpools = carpools.filter(
            #         destination_address__area__contains=check_destination)

            # if check_time:
            #     hour = check_time.split(':')[0]

            #     carpools = carpools.filter(
            #         time__hour=hour
            #     )

            # if check_days:
            #     carpools = carpools.filter(
            #         days=check_days
            #     )

            # carpools = carpools.order_by('-created_at')[:limit]

            # Transform object into JSON, is necessary set many to True
            # because we are getting multiple instances
            serializer = CarpoolSerializer(carpools, many=True)

            return Response(serializer.data)
        except Exception:
            # If an exception occur, return a response with status 500
            message = 'Algum erro ocorreu internamente. Tente novamente.'
            return Response(
                {'error': message},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @swagger_auto_schema(
        operation_description='POST Criar grupo de carona',
        operation_summary='Criar grupo de carona',
        request_body=carpool_docs.create_request_body,
        tags=['Carpool'],
        responses=carpool_docs.create_responses
    )
    def post(self, request):
        try:
            data = request.data

            # Get the fields from Request Body
            name = data['name']
            time = data['time']
            description = data['description']
            free_seats = data['free_seats']
            days = data['days']

            # Set the start address
            start_address_state = data['start_address_state']
            start_address_city = data['start_address_city']
            start_address_area = data['start_address_area']
            start_address_street = data['start_address_street']
            start_address_number = data['start_address_number']

            start_address = Address(
                city=start_address_city,
                state=start_address_state,
                area=start_address_area,
                street=start_address_street,
                number=start_address_number
            )

            # Set the start address
            destination_address_state = data['destination_address_state']
            destination_address_city = data['destination_address_city']
            destination_address_area = data['destination_address_area']
            destination_address_street = data['destination_address_street']
            destination_address_number = data['destination_address_number']

            destination_address = Address(
                city=destination_address_city,
                state=destination_address_state,
                area=destination_address_area,
                street=destination_address_street,
                number=destination_address_number
            )

            driver = Profile.objects.get(account=request.user)

            driver.is_driver = True

            # Create Carpool instance
            # and link to start and destination addresses
            carpool = Carpool(
                name=name, time=time,
                description=description,
                free_seats=free_seats,
                days=days,
                driver=driver,
                start_address=start_address,
                destination_address=destination_address
            )

            # Save to database
            start_address.save()
            destination_address.save()
            carpool.save()
            driver.save()

            # -- Add Code: Set the user as a driver

            # Transform carpool instance into object
            carpool = CarpoolSerializer(carpool).data

            # Return object saved to database as JSON with status code 201
            return Response(carpool, status=status.HTTP_201_CREATED)
        except Exception:
            message = 'Something went wrong internally'
            return Response(
                {'error': message},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ProfileView(APIView):
    permission_classes = [OnlyCreate]

    @swagger_auto_schema(
        operation_description='GET Listar usuários',
        operation_summary='Listar conta de usuários cadastrados',
        responses=profile_docs.list_responses,
        tags=['User']
    )
    def get(self, request):
        profiles = Profile.objects.all()

        serializer = ProfileSerializer(profiles, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_description='POST Criar conta de usuário',
        operation_summary='Criar conta de usuário usuário',
        request_body=profile_docs.create_request_body,
        responses=profile_docs.create_responses,
        tags=['User']
    )
    def post(self, request):
        try:
            data = request.data

            # Get data from request
            name = data['name']
            cpf = data['cpf']
            driver_license = data['driver_license']
            phone_number = data['phone_number']
            email = data['email']
            username = data['username']
            bio = data['bio']
            password = data['password']

            # Verify if the username is taken, if not exist set to None
            try:
                username_taken = User.objects.get(username=username)
            except User.DoesNotExist:
                username_taken = None

            # If username is taken, return status 500
            if username_taken:
                message = 'Nome de usuário em uso'
                return Response(
                    {'error': message}, status=status.HTTP_400_BAD_REQUEST
                )

            account = User.objects.create_user(username, email, password)

            profile = Profile(
                name=name,
                cpf=cpf,
                driver_license_number=driver_license,
                phone_number=phone_number,
                email=email,
                username=username,
                bio=bio,
                account=account
            )

            profile.save()

            serializer = ProfileSerializer(profile)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as error:
            print(error.__str__())

            # If an exception occur, return a response with status 500
            message = 'Algum erro ocorreu internamente. Tente novamente.'
            return Response(
                {'error': message},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def delete(self, request):
        Profile.objects.all().delete()
        User.objects.all().delete()

        return Response({
            "message": "Users deleted with success"
        }, status=status.HTTP_200_OK)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()

        return Response({'detail': 'Successfully logged out.'})


class SessionView(APIView):
    def get(self, request):
        user = request.user

        profile = Profile.objects.get(account=user)

        serializer = ProfileSerializer(profile)

        return Response(serializer.data)


class UserMessageView(APIView):
    @swagger_auto_schema(
        operation_description='GET Listar todas as mensagens de usuários',
        operation_summary='Listar mensagens de usuários',
        responses=user_message_docs.list_responses,
        tags=['User Message']
    )
    def get(self, request):
        messages = UserMessage.objects.all()

        serializer = UserMessageSerializer(messages, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_description='POST Enviar mensagem de usuário usuário',
        operation_summary='Enviar mensagem para de usuário para usuário',
        request_body=user_message_docs.create_request_body,
        responses=user_message_docs.create_responses,
        tags=['User Message']
    )
    def post(self, request):
        try:
            data = request.data

            # Get data from request body
            content = data['content']
            receiver = Profile.objects.get(pk=data['receiver'])
            sender = Profile.objects.get(pk=data['sender'])
            carpool = Carpool.objects.get(pk=data['carpool'])

            # Instantiate user message
            message = UserMessage(
                content=content,
                receiver=receiver,
                sender=sender,
                carpool=carpool
            )

            # Save in database
            message.save()

            # Transform object into JSON
            serializer = UserMessageSerializer(message)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception:
            # If an exception occur, return a response with status 500
            message = 'Algum erro ocorreu internamente. Tente novamente.'
            return Response(
                {'error': message},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class UserMessageByUserView(APIView):
    def get(self, request, id=None):
        userMessages = UserMessage.objects.filter(
            Q(receiver=id) | Q(sender=id))

        serializer = UserMessageSerializer(userMessages, many=True)

        return Response(serializer.data)


class UserMessageWithUserView(APIView):
    def get(self, request, s_user_id=None):
        user_id = Profile.objects.get(account=request.user.id).id

        if user_id == s_user_id:
            error_message = "O id do usuário secundário " \
                "não pode ser o mesmo que o seu."

            return Response(
                {'error': error_message},
                status=status.HTTP_400_BAD_REQUEST
            )

        userMessages = UserMessage.objects.filter(
            (Q(receiver=user_id) & Q(sender=s_user_id)) |
            (Q(receiver=s_user_id) & Q(sender=user_id))
        )

        serializer = UserMessageSerializer(userMessages, many=True)

        return Response(serializer.data)


class UserMessageUsersView(APIView):
    def get(self, request):
        users_filtered = []

        user_logged_in_id = Profile.objects.get(account=request.user.id).id

        user_messages = UserMessage.objects.filter(receiver=user_logged_in_id)

        for message in user_messages:
            sender = message.sender

            if sender not in users_filtered:
                users_filtered.append(sender)

        user_messages = UserMessage.objects.filter(sender=user_logged_in_id)

        for message in user_messages:
            receiver = message.receiver

            if receiver not in users_filtered:
                users_filtered.append(receiver)

        for index, user in enumerate(users_filtered):
            secondary_user_id = user.id

            userMessages = UserMessage.objects.filter(
                (Q(receiver=user_logged_in_id) & Q(sender=secondary_user_id)) |
                (Q(receiver=secondary_user_id) & Q(sender=user_logged_in_id))
            )

            last_message = userMessages[0]

            users_filtered[index] = {
                'user': ProfileSerializer(user).data,
                'last_message': UserMessageSerializer(last_message).data
            }

        return Response(users_filtered)


class RecentDriversView(APIView):
    def get(self, request):
        drivers = Profile.objects.filter(
            is_driver=True).order_by('-created_at')

        drivers_with_details = []

        for driver in drivers:
            carpools = Carpool.objects.filter(driver=driver)

            carpool_serializer = CarpoolSerializer(carpools, many=True)

            driver_serializer = ProfileSerializer(driver)

            driver_details = {
                **driver_serializer.data,
                'carpools': carpool_serializer.data
            }

            drivers_with_details.append(driver_details)

        return Response(drivers_with_details, status=status.HTTP_200_OK)


class ChatConsumer(JsonWebsocketConsumer):

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.room_name = None
        self.room_group_name = None

    def connect(self):
        print('Connected!')
        args = self.scope['url_route']['kwargs']

        user_id = args['user_id']
        secondary_user_id = args['secondary_user_id']

        self.room_name = f"{user_id}_{secondary_user_id}"
        self.room_group_name = 'chat_%s' % self.room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, code):
        print('Disconnected!')

        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

        return super().disconnect(code)

    def list_message_group(self, event):
        self.send_json(event["content"])

    def receive_json(self, content, **kwargs):
        message_type = content["type"]

        print(self.groups)

        if message_type == "create-message":

            message = content["message"]
            receiver = Profile.objects.get(pk=content["receiver"])
            sender = Profile.objects.get(pk=content['sender'])
            carpool = Carpool.objects.get(pk=content['carpool'])

            # Instantiate user message
            message = UserMessage(
                content=message,
                receiver=receiver,
                sender=sender,
                carpool=carpool
            )

            # Save in database
            message.save()

            id = content["sender"]

            userMessages = UserMessage.objects.filter(
                Q(receiver=id) | Q(sender=id))
            userMessages[0].content
            serializer = UserMessageSerializer(userMessages, many=True)

            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name, {
                    "type": "list_message_group",
                    "content": {
                        "type": "list-messages",
                        "data": serializer.data
                    }
                }
            )
        elif message_type == "list-messages":
            id = content["user_id"]

            userMessages = UserMessage.objects.filter(
                Q(receiver=id) | Q(sender=id))

            serializer = UserMessageSerializer(userMessages, many=True)

            self.send_json({
                "type": "list-messages",
                "data": serializer.data
            })

        return super().receive_json(content, **kwargs)
