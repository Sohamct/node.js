const express = require('express')
require("./config-mongoose")

const Product = require("./model-schema_L-41")
const app = express()

app.use(express.json());

app.get("/search/:key", async(req, resp) => {
    // console.log(req.params.key)
    let data = await Product.find({
        "$or": [
            { "name": { $regex: req.params.key } },
            { "brand": { $regex: req.params.key } }
        ]
    })
    resp.send(data)
})

app.listen(5000)