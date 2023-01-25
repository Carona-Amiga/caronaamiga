FROM python:3.8.10

ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt .

RUN pip install --upgrade pip

run pip install gunicorn

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["sh", "./wsgi-entrypoint.sh"]