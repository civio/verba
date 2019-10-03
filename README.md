# verba

Corpus disponibles:
 - [Telediarios con escaleta](https://s3.eu-west-3.amazonaws.com/verba-test.civio.es/Corpus-Telediarios-con-escaleta.zip) (10/3/2015 - 20/9/2017).
 - [Telediarios 2018](https://s3.eu-west-3.amazonaws.com/verba-test.civio.es/Corpus-Telediarios-2018.zip)


## Running locally

Project setup:

```
npm postinstall
```

Configure connection to Elastic backend making a copy of `/api/.env.example` into `/api.env` and modifying it accordingly. Same with `/web/.env.example`.

Start server (both API and web):

```
npm start
```

Compile and minifies for production:

```
npm build
```


## Deployment

Desplegado en `midas`, en `/var/www/verba-volant.civio.es/`. Hay dos partes, el frontend que se sirve por el Apache y el API que es un servicio que levanta un Express (Node.js). La configuración (variables de entorno...) del servicio está en `/etc/systemd/system/verba-api.service`.
