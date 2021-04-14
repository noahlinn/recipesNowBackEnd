const models = require('../models')
const userController = {}

userController.createUser = async (req, res) => {
    try {
        let user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            diet: req.body.diet
        })
        res.json({ message: 'user created', user })
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

userController.login = async (req, res) => {
    try {
        let user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user.password === req.body.password) {
            res.json({ message: 'welcome back', user })
        }
        else {
            res.status(401)
            res.json({ error: 'login failed' })
        }
    } catch (error) {
        error
        res.status(400)
        res.send(error)
    }
}

userController.saveRecipe = async (req, res) => {
    try {
        let [recipe, create] = await models.recipe.findOrCreate({
            where: {
                recipeId: req.params.recipeId
            }
        })
        console.log(recipe)
        
        let user = await models.user.findOne({
            where:{
                id: req.params.userId
            }
        })
        console.log(user)
        await user.addRecipe(recipe)
        res.send({recipe,user})
    } catch (error) {
        res.send(error)
    }
}

userController.getSavedRecipes = async (req, res) => {
    try {
        let user = await models.user.findOne({
            where:{
                id: req.params.userId
            }
        })
       let recipes = await user.getRecipes()
       
        res.json(recipes)
        
    } catch (error) {
        res.send(error)
    }
}

userController.deleteSavedRecipe = async (req, res) => {
    try {
        let recipe = await models.recipe.findOne({
            where: {
                recipeId: req.params.recipeId
            }
        })
        let user = await models.user.findOne({
            where:{
                id: req.params.userId
            }
        })
        await user.removeRecipe(recipe)
        res.json('succes')
    } catch (error) {
        res.send(error)
    }
}

userController.updateDiet = async (req, res) => {
    try {
        let user = await models.user.findOne({
            where:{
                id: req.params.userId
            }
        })
        let update = await user.update(req.body)
        console.log(user)
        res.json({user, update})
    } catch (error) {
        res.send(error)
    }
}


module.exports = userController
