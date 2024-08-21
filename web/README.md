# Order Demo

## Installation

```bash

git clone <url>

cd order-demo

docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs


cp .env.example .env

sail up -d

sa key:generate

sa migrate

sail npm install



```



## Run Dev

Run the following commands from dedicated terminal windows to start all necessary services for application.

```bash
sail up -d

sail npm run dev

sa reverb:start

sa queue:work

sa schedule:work

sa horizon
```




## Dev Tools


```php
// localhost/horizon
// localhost/telescope
// localhost/pulse
```




## Dev Notes

### Redis

Queue is done in keyspace db0 and caching is done in db1.

