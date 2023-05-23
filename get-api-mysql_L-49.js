const express = require("express")
const app = express()
const conn = require("./config_mysql_L-49")

app.get("/", (req, resp) => {
    conn.query("select * from owner", (err, result) => {
            if (err) {
                console.log("Error")
                return;
            } else {
                resp.send(result)
            }
        })
        // resp.send("Route sended.") //it will give error!
});

app.listen(5000)