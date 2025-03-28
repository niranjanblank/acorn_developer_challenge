FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git unzip curl zip libzip-dev nodejs npm \
    && docker-php-ext-install zip pdo pdo_mysql

WORKDIR /var/www

COPY . .

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install
RUN npm install

RUN chmod -R 775 storage bootstrap/cache

EXPOSE 8000 5173
