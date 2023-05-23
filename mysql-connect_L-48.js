const mysql = require("mysql")
const conn = mysql.createConnection({
    host: 'db4free.net',
    user: 'sohamtejani',
    password: '55f9cd87',
    database: 'soham699db'
});

conn.connect((err) => {
    if (err) {
        console.warn(err)
    } else {
        console.warn("connected")
    }
});

conn.query("select * from customer", (err, result) => {
    if (!err) {
        console.log("Result ", result)
    }
})