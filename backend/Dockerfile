FROM python:3.8.10

ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN python3 manage.py collectstatic --noinput

EXPOSE 8000

cmd ["python3", "manage.py", "runserver", "0.0.0.0:8000"]