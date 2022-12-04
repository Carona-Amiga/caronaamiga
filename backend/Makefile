IMAGE_NAME=matheusinit/server:1.0
CONTAINER_NAME=caronaamiga_server

install:
	pip install -r requirements.txt

build:
	docker build -t $(IMAGE_NAME) .

up:
	sudo docker run -it -p 8000:8000 -d --net host --name $(CONTAINER_NAME) $(IMAGE_NAME)

down:
	docker rm -f $(CONTAINER_NAME)

clear:
	docker image prune -f