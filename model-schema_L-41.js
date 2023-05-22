const mongoose = require('mongoose')
    // mongoose.connect("mongoodb://127.0.0.1:27017/e-comm")

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})

module.exports = mongoose.model('products', productSchema)