ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

help:
	echo "help"
start:
	docker-compose up -d --build
start-only:
	docker-compose up -d
build:
	docker-compose build
stop:
	docker-compose down
install: build-php build-frontend
build-php:
	docker run -v $(ROOT_DIR)/src:/app composer composer install
build-frontend:
	docker build -t npmbuilder docker/npm
	docker run -v $(ROOT_DIR)/src:/usr/src/app npmbuilder
restart: build stop start-only