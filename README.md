# verba

## Running locally

Project setup:

```
npm install
```

Configure connection to Elastic backend making a copy of `/api/.env.example` into `/api.env` and modifying it accordingly. Same with `/web/.env.example`.

Start server (both API and web):

```
npm run start
```

## ElasticSearch

Estamos usando Elastic 7. Para instalarlo en OS X puedes usar `brew`, como [explican aquí](https://www.elastic.co/guide/en/elastic-stack-get-started/7.4/get-started-elastic-stack.html#install-elasticsearch):

```
brew tap elastic/tap
brew install elastic/tap/elasticsearch-full
elasticsearch
```

Y lo mismo con Kibana:

```
brew install elastic/tap/kibana-full
kibana
```

## Despliegue en producción (Civio)

La aplicación está desplegada en `midas`, en `/var/www/verba.civio.es/`. Hay dos partes, el frontend (hecho con Vue.js) que se sirve por el Apache y el API que es un servicio que levanta una aplicación Express. La configuración (variables de entorno...) del servicio está en `/etc/systemd/system/verba-api.service`.

Para reiniciar Elastic, si fuera necesario:

```
sudo service elasticsearch start
```

Para actualizar la aplicación:

```
$ cd /var/www/verba.civio.es/public
$ git pull
$ npm install
$ npm run build
$ sudo service verba-api restart
```

Una vez desplegada, la aplicación ofrece dos URLs:

- [`verba.civio.es`](https://verba.civio.es/), la aplicación web.
- [`verba.civio.es/api`](https://verba.civio.es/api/), el API usado por la aplicación.
