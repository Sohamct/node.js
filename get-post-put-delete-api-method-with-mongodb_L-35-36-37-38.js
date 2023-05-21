// when we want store new data in database, we use the post api.
// for reading data from database => we use get.
// for updating data in database we use put.
// for deleting data in databse we use delete.

const express = require('express')
const dbConnect = require('./db_connection_L-31')
const app = express()
const mongodb = require('mongodb')
    //note: we can keep same url for get and post.

app.use(express.json()) // now we can get data from postman in json as body.

app.get('/', async(req, resp) => {
        let data = await dbConnect()
        data = await data.find({}).toArray()
        resp.send(data)
    })
    // in below version 4.6 of express we have to use bodyparser.json()
    // but in afterward version it is not required to bodyparser.json()
app.post('/', async(req, resp) => {
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    resp.send(result)
})

app.put("/:name", async(req, resp) => {
    let data = await dbConnect()
    let result = await data.updateOne({ name: req.params.name }, { $set: req.body })
    resp.send(result)
})

app.delete('/:id', async(req, resp) => {
    console.log(req.params.id)
    const db = await dbConnect()
    const result = await db.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send(result)
})

app.listen(5000)

// for sending data from postman :
//go to 'raw' and select 'jason'