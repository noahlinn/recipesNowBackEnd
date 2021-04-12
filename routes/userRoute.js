const userController = require('../controllers/userController')
const express = require('express')
const userRoute = express.Router()

userRoute.post('/', userController.createUser)
userRoute.post('/login', userController.login)
userRoute.delete('/:userId/delete/:recipeId', userController.deleteSavedRecipe)
userRoute.post('/:userId/save/:recipeId', userController.saveRecipe)

userRoute.get('/:userId/savedRecipes', userController.getSavedRecipes)

module.exports = userRoute