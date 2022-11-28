VERSION ?= 1.1
IMAGE_NAME=matheusinit/server:$(VERSION)
CONTAINER_NAME=caronaamiga_server

install:
	pip install -r requirements.txt

build:
	docker build -t $(IMAGE_NAME) .

up:
	docker run -it -p 8000:8000 -e SECRET_KEY=$(SECRET_KEY) -e DB_USER=$(DB_USER) -e DB_HOST=$(DB_HOST) -e DB_PASSWORD=$(DB_PASSWORD) -e DB_NAME=$(DB_NAME) -d --name $(CONTAINER_NAME) $(IMAGE_NAME)

down:
	docker rm -f $(CONTAINER_NAME)

clear:
	docker image prune -f