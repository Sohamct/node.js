const dbConnect = require('./db_connection_L-31')

// console.warn(dbConnect()) // it prints: Promise{<pending>}
// 2 ways to handle promise:
//1. use async await
//2. use promise

// uncomment and run this :
// 1 st way: 
// dbConnect().then((resp) => {
//         // console.warn(resp.find().toArray())
//         resp.find({ brand: 'samsung' }).toArray().then((data) => {
//             console.warn(data)
//         })
//     })
// toArray() also always returns promise.

// 2nd way: (preferable)
const main = async() => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}
main()