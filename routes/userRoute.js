const userController = require('../controllers/userController')
const express = require('express')
const userRoute = express.Router()

userRoute.post('/', userController.createUser)
userRoute.post('/login', userController.login)


module.exports = userRoute