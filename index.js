const express = require('express')
const mongoose = require('mongoose')

const authorRoutes = require('./routes/author')
require('dotenv').config()

const app = express()
const port = (process.env.PORT || 3005)
app.set('port', port)

app.use(express.json())
app.use('/api/author',authorRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=>console.error(err.message))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})