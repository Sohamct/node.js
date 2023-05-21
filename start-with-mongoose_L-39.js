//mongoose is more restricted version og mongodb.
//we can restrict on type, no of columns...
const mongoose = require('mongoose')
    //mongoose provodes async.
    //mongoose shema: validates filled in database.(field)
const main = async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
    const ProductSchema = new mongoose.Schema({
            name: String,
            price: Number,
            brand: String,
            category: String
        }) //now, more field then this specified will not be added.

    const ProductsModel = mongoose.model('products', ProductSchema)
    let data = new ProductsModel({
        name: "m12",
        price: 10000,
        brand: "mi",
        category: "mobile"
    });
    let result = await data.save()

    console.log(result)
}
main()
    //model: connects nodejs with mongodb
    //command: 'nodemon' will run index.js default(without specifying the index.js)