
### Última actualización: _25/09/2021_
___


#### Instalación dependencias del proyecto:
`$ npm install`
___

#### Configuración de ambiente de desarrollo: 

Para hacer uso completo de la aplicación de forma local es necesario tener una BD MySQL corriendo bajo el puerto 3306. 
#### Comando Docker para crear imagen MySQL:

`docker run -p 3306:3306 --name tu_DB_local_DB -e MYSQL_ROOT_PASSWORD=tu_DB_local_PASS -d mysql`
___

Crear un archivo `.env` con las siguientes variables de entorno:

```
 DEV=true //true si el ambiente es local/desarrollo
 HB_AUTH_SECRET=tuSecretAuth
 HB_AUTH_EXPIRES=1d
 HB_AUTH_ROUNDS=10
 DEV_DB_HOST=localhost
 PROD_DB_PORT=3306
 DEV_DB_USER=root
 DEV_DB_PASS=admin
 DEV_DB_DB=hb_db

```

___

####¿Cómo correr el proyecto?

Para correr el proyecto es necesario tener una base de datos MySQL activa. Al correr el comando `node server.js` se 
crearán las tablas en la BD (si es que aún no existen).
___

#### Endpoints:

---

