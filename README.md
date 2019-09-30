# verba

Corpus disponibles:
 - [Telediarios con escaleta](https://s3.eu-west-3.amazonaws.com/verba-test.civio.es/Corpus-Telediarios-con-escaleta.zip) (10/3/2015 - 20/9/2017).
 - [Telediarios 2018](https://s3.eu-west-3.amazonaws.com/verba-test.civio.es/Corpus-Telediarios-2018.zip)

Desplegado en `midas`, en `/var/www/verba-volant.civio.es/`. Hay dos partes, el frontend que se sirve por el Apache y el API que es un servicio que levanta un Express (Node.js). La configuración (variables de entorno...) del servicio está en `/etc/systemd/system/verba-api.service`.

