require('dotenv').config()

const express = require('express')
const checkSetsRoute = require('./checksets')

const app = express()

app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

app.use('/api/checkSets', checkSetsRoute)

app.get('/', (request, response) => {
    response.json({message: 'Hello World!'})
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})