ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

first-start: start full-setup
help:
	printf "make first-start to first staring\nmake start to start without reinstalling\nmake restart to restart all containers\nmake stop to stop all containers\nmake install to install npm and composer\nmake db-migrate to use migrations\n"
start:
	docker-compose up -d --build
start-only:
	docker-compose up -d
build:
	docker-compose build
stop:
	docker-compose down
full-setup: install setup-laravel db-migrate
install: build-php build-frontend
build-php:
	docker run -v $(ROOT_DIR)/src:/app composer composer install
build-frontend:
	docker build -t npmbuilder docker/npm
	docker run -v $(ROOT_DIR)/src:/usr/src/app npmbuilder
setup-laravel: 
	docker run -v $PWD/src:/app -w /app php:8.1-fpm php artisan storage:link
	docker run -v $PWD/src:/app -w /app php:8.1-fpm php artisan key:generate
	docker run -v $PWD/src:/app -w /app php:8.1-fpm chmod 666 -R storage
	docker run -v $PWD/src:/app -w /app php:8.1-fpm chmod 666 -R .env
db-migrate:
	docker build -t phpfpm docker/php-fpm
	docker run --network plant-manager_backend -v $PWD/src:/app -w /app phpfpm php artisan migrate

restart: build stop start-only