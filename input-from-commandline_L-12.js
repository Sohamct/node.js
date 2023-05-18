const fs = require('fs')

const input = process.argv;
if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[3])
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
} else {
    console.log('Invalid input')
}
// console.log(process.argv[3]) //process is big object, argument vector
//command: node ./input-from-commandline_L-12.js add appendFile.txt 'this is a fruit.'