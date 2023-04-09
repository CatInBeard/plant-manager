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
install:
	cd src && composer install && npm run build
restart: build stop start-only