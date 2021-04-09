const models = require('../models')
const userController = {}

userController.createUser = async (req, res) => {
    try {
        let user =await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password : req.body.password,
            diet: req.body.diet
        })
        res.json({message: 'user created', user})
    } catch (error) {
        
    }
}

module.exports = userController
