const fs = require('fs') // fs is filesystem module.
const path = require('path');

const dirpath = path.join(__dirname, 'files');
// console.log(dirpath)

for (i = 0; i < 5; i++) {
    fs.writeFileSync(dirpath + "/hello" + i + ".txt", "a simple text file");
    // or
    fs.writeFileSync(dirpath + `/hello${i}.txt`, "a simple text file");
}

fs.readdir(dirpath, (error, files) => {
        // console.warn(files);
        // or
        files.forEach((item) => {
            console.log("file name is: ", item);
        })
    })
    // we can't access the data from other drive like d and e drive.
    // we can only data inside our webserver that is node.