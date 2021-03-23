const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const router = require('./routes/web')
const expressValidator = require('express-validator')
const cors = require('cors')
const connectDB = require('./db/connect')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
// app.use(expressValidator())
app.use('/api',router)

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

