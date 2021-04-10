const { default: axios } = require('axios')
const models = require('../models')
const recipeController = {}
const apiKey = '228c3542df2c41858149b5184fb408a8'


recipeController.search = async (req, res) => {
    try {
        let query = await req.body.query
        let user = await models.user.findOne({
            where: {
                id: req.body.id
            }
        })
        let userDiet = user.diet
        let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${userDiet}&query=${query}`)
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

recipeController.getOne = async (req, res) => {
    try {
        let recipe = req.params.recipeId
        let response = await axios.get(`https://api.spoonacular.com/recipes/${recipe}/information?apiKey=${apiKey}`)
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}



module.exports = recipeController