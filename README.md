# Introducción a Express.js

<img src="img/programate-academy.png" alt="Logo Programate">

## Objetivo

Vamos a desarrollar una API conectada a MongoDB. El propósito de este repositorio es centralizar la documentación necesaria para construir una API utilizando Express, ya que a su formador no le agrada completamente la que está disponible en línea. Este tutorial incluirá enlaces a secciones específicas de la documentación existente, así como información adicional propia. Además, se planea proporcionar un video de apoyo para facilitar el proceso.

## primeros pasos
Recuerda debes tener instalado [Node.js](https://nodejs.org/en/download), despues crea y entra a la carpeta donde vas a guardar el proyecto. 
```
mkdir app
cd app
```
Una vez dentro de la carpeta usa el siguiente comando para crear un archivo que contendra la informacion de configuracion del proyecto (recuerda personalizarla). Deja el punto de entrada como index.js
```
npm init
```

Vamos a instalar express.js

```
npm install express
```
les debe aparecer un archivo package-lock.json y una carpeta node_modules, en este momento es buena idea crear el .gitignore para que no se suba esta ultima.
```
touch .gitignore
```
dentro poner
```
node_modules
```
Ahora vamos a crear un archivo llamado index.js
```
touch index.js
```

al final de esta seccion deben tener algo parecido a esto: 
<img src="img/primeros_pasos.png" alt="estructura de carpetas y archivos al final primeros pasos">

## Hola Mundo

Dentro de index.js vamos a poner el siguiente codigo:
```
const express = require('express')

const app = express()
const port = (process.env.PORT || 3005)
app.set('port', port)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Para levantar el servidor vamos a correr el siguiente comando en una consola al nivel del index.js
```
node index.js
```
Como es usual si van al navegador a la direccion 127.0.0.1:3005 van a encontrar el hola mundo.


## Documentación de MongoDB

Van a crear la cuenta, esta es la documentación recomendada para MongoDB, aunque pueden encontrar más en línea.

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
MONGO_DB_URI = `12lkjefoaih1209`
```
4. En el archivo en el que se vayan a utilizar las variables de entorno, se recomienda llamarlas de la siguiente manera:
```
require('dotenv').config();
```
Recuerda que el archivo .env no debe incluirse en tu repositorio de código, especialmente si contiene información sensible como claves de API o contraseñas. Asegúrate de agregarlo a tu archivo .gitignore para evitar que se publique accidentalmente.



## Modelos ORM y MongoDB
Ahora que ya tenemos una cuenta y el link de conexion a la base de datos vamos a empezar con los modelos.


Primero vamos a instalar en ORM, en este caso usaremos mongoose.
```
npm install mongoose
```
Ahora vamos a crear un archivo de configuracion 

```
touch mongo.js
```
El cual va a tener el siguiente codigo 
```
const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

if (!connectionString) {
  console.error('Recuerda que tienes que tener un archivo .env con las variables de entorno definidas y el MONGO_DB_URI que servirá de connection string. En las clases usamos MongoDB Atlas pero puedes usar cualquier base de datos de MongoDB (local incluso).')
}

// Conection a mongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.log(err)
  })

process.on('uncaughtException', error => {
  console.error(error)
  mongoose.disconnect()
})
```

 Como ya es usual crea una carpeta llamada models
```
mkdir models
```
Dentro de la carpeta models vamos a crear un archivo llamado author.js.js
```
touch models/author.js.js
```
y dentro de author.js.js vamos a poner el siguiente codigo.

```
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const AuthorSchema = new Schema ({
    first_name: {
        type:String,
        require: true,
        maxLength:100
    },
    family_name:{
        type:String,
        require: true,
        maxLength:100
    },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
})

module.exports = mongoose.model(AuthorSchema)
```
Vamos a hacer lo mismo con los modelos de Book model, BookInstance model y Genre model.


Usa como guia la [documentacion de mozzila de express.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#defining_the_locallibrary_schema)

### Documentación para los models
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
* [Documentacion Mozilla.org ](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#routes_primer) Recuerda al momento de llamar el [controlador](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#author_controller) usar lo que esta en la sección de los controladores, es decir las query a la Base de datos que estan en la seccion anterior.

## Contacto

Si tienes alguna pregunta, sugerencia o deseas obtener el workbook para desarrollar este proyecto, no dudes en contactarme a través de: [jsanchez@educamas.com.co](jsanchez@educamas.com.co).

# node-basic-c9
