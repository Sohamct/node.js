const express = require('express')
const dbConnect = require('./db_connection_L-31')
const app = express()

app.get('/', async(req, resp) => {
        let data = await dbConnect()
        data = await data.find({}).toArray()
        resp.send(data)
    })
    // we can not pass body in get, we only can pass parameter in url in get.
    // body we can passs in the post.
app.listen(5000)