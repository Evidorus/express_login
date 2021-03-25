const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const expressValidator = require('express-validator')
const config = require('./utils/config')
const bodyParser = require("body-parser");
const signUpRoutes = require("./routes/signup")
const loginRoutes = require("./routes/login")
const adminRoutes = require("./routes/admin")
const app = express()

mongoose.connect(config.mongoDB, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('DB connecté');
})

app.listen(config.port, () => {
    console.log('Serveur lancé')
})

app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/signup', signUpRoutes)
app.use('/login', loginRoutes)
app.use('/admin', adminRoutes)
