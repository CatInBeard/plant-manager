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
restart: build stop start-only