IMAGE_NAME=caronaamiga/server

install:
	pip install -r requirements.txt

build:
	docker build -t $(IMAGE_NAME) .

up:
	docker run -it -p 8000:8000 --name caronaamiga_server $(IMAGE_NAME)
