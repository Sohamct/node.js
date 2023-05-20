const { MongoClient } = require('mongodb');
// or
//const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm';

// if we are using await, that function must bt async.
const client = new MongoClient(url)

async function getData() {
    let result = await client.connect()
    console.log("Connection has been made.")

    let db = result.db(database)
    let collection = db.collection('products')
    let response = await collection.find({}).toArray();
    console.log(response)
}

getData();