#!/bin/sh

until python3 manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

./manage.py collectstatic --noinput

gunicorn carona_amiga.wsgi --bind 0.0.0.0:8000 --workers 1 --threads 1 --log-level debug