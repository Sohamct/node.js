// used for calling api, connection with database, access file, process code.
// global and non-global modules.
// modules are already in languages eg: console, filesystem, buffer, HTTP
// global modules are not required to be import.

const fs = require('fs');
console.log("Code step by step")
fs.writeFileSync("myfile.txt", "content of myfile")

console.log("->>", __dirname)
console.log("->>", __filename)