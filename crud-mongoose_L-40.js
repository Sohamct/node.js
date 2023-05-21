const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-comm')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})

const saveInDB = async() => {
        const Product = mongoose.model('products', productSchema)
        let data = new Product({
            name: "Note Pro",
            price: 250,
            brand: "maxx",
            category: "mobile"
        })
        const result = await data.save()
        console.log(result)
    }
    // saveInDB()
const updateInDB = async() => {
        const Product = mongoose.model('products', productSchema)
        let data = await Product.updateOne({ name: "m9" }, { $set: { price: 7000, brand: "maxx", category: "mobile" } })
        console.log(data)
    }
    // updateInDB()

const deleteInDB = async() => {
        const Product = mongoose.model('products', productSchema)
        let data = await Product.deleteOne({ name: "m9" })
    }
    // deleteInDB()

const findInDB = async() => {
    const Product = mongoose.model('products', productSchema)
    let data = await Product.find({ name: "m90" })
    console.log(data)
}
findInDB()