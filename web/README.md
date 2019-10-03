## Running locally

Project setup:

```
npm install
```

Compile and hot-reloads for development:

```
npm run serve
```

Compile and minifies for production:

```
npm run build
```

Run your tests:

```
npm run test
```

Lints and fixes files:

```
npm run lint
```

## Deployment

Desplegado en `midas`, en `/var/www/verba-volant.civio.es/`. Hay dos partes, el frontend que se sirve por el Apache y el API que es un servicio que levanta un Express (Node.js). La configuración (variables de entorno...) del servicio está en `/etc/systemd/system/verba-api.service`.
