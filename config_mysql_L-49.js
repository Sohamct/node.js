const mysql = require("mysql")
const conn = mysql.createConnection({
    host: "db4free.net",
    user: "sohamtejani",
    password: "55f9cd87",
    database: "soham699db"
});

conn.connect((err) => {
    if (err) {
        console.log("Error in connection.")
    }
});

module.exports = conn