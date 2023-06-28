# Introducción a Express.js

<img src="img/programate-academy.png" alt="Logo Programate">

## Objetivo

Vamos a contruir una API conectada a MongoDB. La idea de este repositorio es concentrar la documentación para contruir una API en express ya que a su formador no le termina de gustar la que se encuentra en linea. Este tutorial va a tener enlaces a partes especificas de  documentación existente y otra propia. Tambien la idea es tener un video que sirva de apoyo.

## Variables de entorno

Las variables de entorno son valores que se configuran en el sistema operativo y que pueden ser accedidos por las aplicaciones en tiempo de ejecución. En Node.js, puedes acceder a estas variables a través del objeto 'dotenv'.

1. Instala dotenv ejecutando el siguiente comando en tu línea de comandos:
```
npm install dotenv
```
2. Crea un archivo .env en el directorio raíz de tu proyecto.

3. Dentro de .env, define tus variables de entorno por ejemplo:

```
PASSWORDDB = `12lkjefoaih1209`
```
4. En el archivo donde se van a usar las variables de entorno llamarlas usando 
```
require('dotenv').config();
```
Recuerda que el archivo .env no debe incluirse en tu repositorio de código, especialmente si contiene información sensible como claves de API o contraseñas. Asegúrate de agregarlo a tu archivo .gitignore para evitar que se publique accidentalmente.

## Documentación de MongoDB

Esta es la documentación recomendada para MongoDB, aunque pueden encontrar más en línea.

* [Quick Start](https://www.mongodb.com/docs/drivers/node/current/quick-start/#quick-start) 
* [Download and Install](https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/)

* [Create a MongoDB Deployment](https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-deployment/)

* [Create a Connection String](https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/#create-a-connection-string)
* [Connect to MongoDB](https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/)

* [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database)

## Documentación para los models

* [Express Tutorial Part 3: Using a Database (Defining and creating models)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#defining_and_creating_models)

* [Mongoose Schemas (Defining your schema)](https://mongoosejs.com/docs/guide.html#definition)


## Documentación para los routers
## Documentación para los controllers

* [Controller](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page#controller) Solo mirar la parte del controlador
### Algunas query de uso comun 
* [Model.find()](https://mongoosejs.com/docs/api/model.html#Model.find())
* [Model.findById()](https://mongoosejs.com/docs/api/model.html#Model.findById())
* [Model.findByIdAndRemove()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndRemove())
* [Model.findByIdAndUpdate()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate())
* [Model.create()](https://mongoosejs.com/docs/api/model.html#Model.create())
* [Model.deleteOne()](https://mongoosejs.com/docs/api/model.html#Model.deleteOne())

## Contacto

Si tienes alguna pregunta o sugerencia o quieres el workbook para desarrollar este proyecto, no dudes en contactarme en [jsanchez@educamas.com.co](jsanchez@educamas.com.co).


# await


# node-basic-c9
