# verba

## ElasticSearch/Kibana

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

## Corriendo en local

Instalamos dependencias de Node:

```
npm install
```

Configuramos la conexión al back-end de Elastic haciendo una copia de `/api/.env.example` en `/api.env` y modificándolo si es necesario. Lo mismo con `/web/.env.example`.

Arrancamos la aplicación (tanto la API como el front-end):

```
npm run start
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
