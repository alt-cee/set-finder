const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    response.json({"message": 'GET sets'})
})

router.post('/', (request, response) => {
    response.json({"message": 'POST cards'})
})

module.exports = router