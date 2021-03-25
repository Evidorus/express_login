const express = require('express')
const router = express.Router()
const userModel = require('../models/user');
const bcrypt = require('bcryptjs')

router.post('/', async (req, res) => {
    try {
        const user = await userModel.findOne({
            email: req.body.email
        })
        if (user) {
            res.status(400)
            .send(`email ${req.body.email} already exists`)
            return;
        }
        if (req.body.password.length < 8) {
            res.status(400).send("password is too short, it have to be 8 characters")
            return;
        }
        if (req.body.password != req.body.confirmPassword) {
            res.status(400).send("password have to be the same as confirm password")
            return;
        }

        await userModel.create({
            surname: req.body.surname,
            firstName: req.body.firstName,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            password: bcrypt.hashSync(req.body.password)
        })
        res.json({success: true})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router