const express = require('express')
require('./config-mongoose')

const Product = require('./model-schema_L-41')
const app = express()
app.use(express.json())

app.post("/create", async(req, resp) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(result)
})

app.listen(5000)