const dbConnect = require('./db_connection_L-31')

const updateData = async() => {
    let data = await dbConnect();
    let result = await data.updateMany({ name: 'max 2' }, { $set: { name: 'max pro 2', price: 36000 } })

    if (result.acknowledged) {
        console.log("data updated.")
    }
}

updateData()