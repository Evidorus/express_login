const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const userModel = require('../models/user');
const jwt = require("jsonwebtoken");
const config = require('../utils/config')

router.post('/', async (req, res) => {
    try{
        const user = await userModel.findOne({
            email: req.body.email,
        })
        .exec();
        console.log(req.body)
        if (bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign(
            {
                id: user._id
            },config.secret,
            {
                expiresIn: 5000
            })
            // console.log(token)
            res.status(200).json({
                success: true,
                token: token,
            })
        }else {
            res.status(401).json({
                success: false,
            })
        }
    } catch(error){
        console.log(error)
    }
})

module.exports = router