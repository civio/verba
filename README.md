# verba

## Elastic

En producción usamos Elastic Cloud, versión 9. En local lo más sencillo es levantar la misma versión con Docker y cargarle unos programas de ejemplo (los mismos que usan los tests):

```
docker compose -f test/docker-compose.yml up -d --wait
test/seed.sh
```

Queda escuchando en `http://localhost:9201`.

## Corriendo en local

Instalamos dependencias de Node (Node 22, ver `.nvmrc`):

```
nvm use
npm install
```

Configuramos la conexión al back-end de Elastic haciendo una copia de `/api/.env.example` en `/api.env` y modificándolo si es necesario. Lo mismo con `/web/.env.example`.

Arrancamos la aplicación (tanto la API como el front-end):

```
npm run start
```

`npm run lint` pasa eslint y comprueba el formato con Prettier (también lo hace la CI), y `npm run format` lo arregla.

## Tests

Los tests del API (`test/api.test.mjs`) son de extremo a extremo: hablan con el API por HTTP contra un Elastic 9.0.4 (la misma versión que en producción) cargado con seis programas exportados de producción (`test/fixtures`). Necesitan Docker.

```
docker compose -f test/docker-compose.yml up -d --wait
test/seed.sh
ELASTIC_API_URL=http://localhost:9201 PORT=8899 npm run start:api   # en otra terminal
API_URL=http://localhost:8899/ npm run test:api
```

Los tests del frontend (`test/web.spec.mjs`) usan Playwright contra el build de producción (servido por `test/serve.mjs`, que hace lo mismo que el Apache) y el mismo API de pruebas. Los valores esperados los sacan del propio API, así que valen también contra producción:

```
npx playwright install chromium   # la primera vez
npm run test:web:build
npm run test:web
```

Después de desplegar, podemos pasar los tests marcados como `@smoke` contra producción. Son pocos y van de uno en uno a propósito: Cloudflare limita las peticiones al API y, si nos pasamos, bloquea nuestra IP durante una hora (error 1015).

```
WEB_URL=https://verba.civio.es API_URL=https://verba.civio.es/api/ npm run test:web
```

## Despliegue en producción (Civio)

La aplicación está desplegada en `midas`, en `/var/www/verba.civio.es/`. Hay dos partes, el frontend (hecho con Vue.js) que se sirve por el Apache y el API que es un servicio que levanta una aplicación Express. La configuración (variables de entorno...) del servicio está en `/etc/systemd/system/verba-api.service`, incluida la URL de Elastic Cloud con sus credenciales. El servicio usa `nvm-exec`, y la versión de Node la fija `NODE_VERSION` en ese mismo fichero. En `midas` hay otras aplicaciones con Node 16, que es la versión por defecto de nvm, así que para Verba hay que hacer siempre `nvm use`.

Para actualizar la aplicación:

```
$ cd /var/www/verba.civio.es/public
$ git pull
$ nvm use
$ npm install
$ npm run build
$ sudo service verba-api restart
```

Y, desde local, los tests de humo contra producción (ver [Tests](#tests)).

Una vez desplegada, la aplicación ofrece dos URLs:

- [`verba.civio.es`](https://verba.civio.es/), la aplicación web.
- [`verba.civio.es/api`](https://verba.civio.es/api/), el API usado por la aplicación.

## Corpus para descarga

El contenido completo de los Telediarios descargados está disponible en dos ficheros que se actualizan diariamente:

- Subtítulos originales (VTT) con metadatos de RTVE (JSON): [corpus_raw.tar.gz](http://verba.civio.es/corpus_raw.tar.gz)
- Subtítulos segmentados en frases usando `syntok` (JSON) con metadatos de RTVE (JSON): [corpus_cooked.tar.gz](http://verba.civio.es/corpus_cooked.tar.gz)
