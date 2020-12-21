const express = require('express')
const app = express()
const apiData = require('../public/json/geo_sx_district.json')
const apiRouters = express.Router()

apiRouters.get('/data', (req, res) => {
    res.json(apiData)
})
app.use('/',apiRouters)
app.listen(8081,() => {
    console.log('mock data is running....')
})