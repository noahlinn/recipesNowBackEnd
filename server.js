const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)
const userRoute = require('./routes/userRoute')
const recipeRoute = require('./routes/recipeRoute')

app.use(express.json())
app.use(require('cors')())

app.use('/users', userRoute)
app.use('/recipes', recipeRoute)

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})
