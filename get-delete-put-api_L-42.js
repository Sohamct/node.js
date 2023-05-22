const express = require('express')
require('./config-mongoose')

const Product = require('./model-schema_L-41')
const { UnorderedBulkOperation } = require('mongodb')
const app = express()
app.use(express.json())

app.post("/create", async(req, resp) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(result)
})

app.get("/list", async(req, resp) => {
    let data = await Product.find()
    resp.send(data)
})

app.delete("/delete/:_id", async(req, resp) => {
    let data = await Product.deleteOne(req.params)
    resp.send(data)
})

app.put("/edit/:_id", async(req, resp) => {
    let data = await Product.updateOne(
        req.params, { $set: req.body }
    )
    resp.send(data)
});
app.listen(5000)