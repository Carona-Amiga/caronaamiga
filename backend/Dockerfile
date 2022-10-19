FROM python:3.8.10-alpine

RUN apk update
RUN apk add postgresql-dev 
RUN apk add --no-cache gcc musl-dev python3-dev alpine-sdk libffi-dev openssl-dev cargo jpeg-dev zlib-dev  ffmpeg

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] 