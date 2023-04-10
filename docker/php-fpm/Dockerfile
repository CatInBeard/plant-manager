FROM php:8.1-fpm

RUN apt update && apt install libzip-dev -y
RUN docker-php-ext-install mysqli pdo_mysql zip

COPY --from=composer:2.5.5 /usr/bin/composer /usr/local/bin/composer