const recipeController = require('../controllers/recipeController')
const express = require('express')
const recipeRoute = express.Router()

recipeRoute.post('/search', recipeController.search)
recipeRoute.get('/search/:recipeId', recipeController.getOne)

module.exports = recipeRoute


