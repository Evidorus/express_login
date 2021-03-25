const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");
const userModel = require('../models/user');

const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const result = jwt.verify(token.split(" ")[1], config.secret);
      console.log(result)
      const user = await userModel
        .findOne({
          _id: result.id,
        })
        .exec();
        req.user = user;
      next();
    } catch (err) {
      res.status(401).send("Acces not Allowed");
    }
}

router.get('/', verifyToken, async (req, res) => {
    try{
        const users = await userModel.find({}).exec()
        res.json(users)

    } catch(error){
        console.error(error)
    }

})

module.exports = router