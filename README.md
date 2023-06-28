# Introducción a Express.js

<img src="img/programate-academy.png" alt="Logo Programate">

## Objetivo

Vamos a desarrollar una API conectada a MongoDB. El propósito de este repositorio es centralizar la documentación necesaria para construir una API utilizando Express, ya que a su formador no le agrada completamente la que está disponible en línea. Este tutorial incluirá enlaces a secciones específicas de la documentación existente, así como información adicional propia. Además, se planea proporcionar un video de apoyo para facilitar el proceso.

## Documentación de MongoDB

Esta es la documentación recomendada para MongoDB, aunque pueden encontrar más en línea.

* [Quick Start](https://www.mongodb.com/docs/drivers/node/current/quick-start/#quick-start) 
* [Download and Install](https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/)

* [Create a MongoDB Deployment](https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-deployment/)

* [Create a Connection String](https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/#create-a-connection-string)
* [Connect to MongoDB](https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/)

* [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database)

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
4. En el archivo en el que se vayan a utilizar las variables de entorno, se recomienda llamarlas de la siguiente manera:
```
require('dotenv').config();
```
Recuerda que el archivo .env no debe incluirse en tu repositorio de código, especialmente si contiene información sensible como claves de API o contraseñas. Asegúrate de agregarlo a tu archivo .gitignore para evitar que se publique accidentalmente.

## Documentación para los models

* [Express Tutorial Part 3: Using a Database (Defining and creating models)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#defining_and_creating_models)

* [Mongoose Schemas (Defining your schema)](https://mongoosejs.com/docs/guide.html#definition)

## Documentación para los controllers

* [Controller](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page#controller) Solo mirar la parte del controlador
### Algunas query de uso común 
* [Model.find()](https://mongoosejs.com/docs/api/model.html#Model.find())
* [Model.findById()](https://mongoosejs.com/docs/api/model.html#Model.findById())
* [Model.findByIdAndRemove()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndRemove())
* [Model.findByIdAndUpdate()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate())
* [Model.create()](https://mongoosejs.com/docs/api/model.html#Model.create())
* [Model.deleteOne()](https://mongoosejs.com/docs/api/model.html#Model.deleteOne())

## Documentación para los routers

* [Documentación Expressjs Router](https://expressjs.com/en/api.html#router)
* [Documentacion Mozilla.org ](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#routes_primer) Recuerda al momento de llamar el controlador(https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#author_controller) usar lo que esta en la sección de los controladores, es decir las query a la Base de datos que estan en la seccion anterior.

## Contacto

Si tienes alguna pregunta, sugerencia o deseas obtener el workbook para desarrollar este proyecto, no dudes en contactarme a través de: [jsanchez@educamas.com.co](jsanchez@educamas.com.co).

# node-basic-c9
