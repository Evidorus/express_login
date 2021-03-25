const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    dateOfBirth: Date,
    email: String,
    password: String,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;