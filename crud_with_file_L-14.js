const { error } = require('console');
const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname, 'crud');
const filepath = `${dirpath}/fruit.txt`;

//1. fs.writeFileSync(filepath, 'This is a simple text file.')
// read
// fs.readFile(filepath, 'utf8', (err, item) => {
//     console.log(item);
// })

// append
// fs.appendFile(filepath, ' and file name is apple.txt', (err) => {
//     if (!err) console.log("file is updated.")
// })

// rename
// fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
//     if (!err) console.log("file name is updated.")
//     else console.log("Error happend")
// })

// delete
// fs.unlinkSync(`${dirpath}/fruit.txt`)

// node js is required some memory to perform operation is called buffer.