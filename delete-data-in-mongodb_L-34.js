const dbConnect = require('./db_connection_L-31')

const deleteData = async() => {
    console.log()
    let data = await dbConnect()

    let result = await data.deleteMany({ name: 'max 1' })
    console.log(result)
    if (result.deletedCount == 1) {
        console.log("1 row deleted")
    } else if (result.deletedCount == 0) {
        console.log("specified data does not exist.")
    }
}

deleteData()