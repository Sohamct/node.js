const dbConnect = require('./db_connection_L-31')

const insert = async() => {
    const db = await dbConnect()
        // const result1 = await db.insertOne(
        //     { name: 'max 1', brand: 'micromax', price: 25000, category: 'mobile' }
        // )
    const result = await db.insertMany([
        { name: 'max 1', brand: 'micromax', price: 25000, category: 'mobile' },
        { name: 'max 2', brand: 'micromax', price: 35000, category: 'mobile' }
    ])
    console.log(result)

    if (result.acknowledged) {
        console.log("data is inserted.")
    }
}

insert()