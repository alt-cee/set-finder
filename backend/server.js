require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

app.post('/api/checkSets', (request, response) => {
    console.log(request.body)
    response.json({"message": 'POST cards'})
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})