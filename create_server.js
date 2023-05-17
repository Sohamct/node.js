const http = require('http');

// using arrow function:

// http.createServer((req, resp) => {
//     resp.write("<h1>Hello this is soham</h1>");
//     resp.end();
// }).listen(6700);

function dataControl(req, resp) {
    resp.write("<h1>Hello this is soham</h1>");
    resp.end();
}

http.createServer(dataControl).listen(6700);