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

module.exports = userController
