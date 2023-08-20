FROM php:8.1-fpm

RUN apt update && apt install libzip-dev -y
RUN pecl install redis \
    && docker-php-ext-enable redis
RUN docker-php-ext-install mysqli pdo_mysql zip

COPY ./uploads.ini /usr/local/etc/php/conf.d/uploads.ini

COPY --from=composer:2.5.5 /usr/bin/composer /usr/local/bin/composer