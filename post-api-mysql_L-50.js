const express = require("express")
const app = express()
const conn = require("./config_mysql_L-49")

app.use(express.json())

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
app.post("/", (req, resp) => {
    // const data = { name: "bhasker", password: "3030", user_type: "visitor" };
    const data = req.body;
    conn.query('INSERT INTO test SET ?', data, (error, result, fields) => {
        if (error) throw error;
        resp.send(result)
    })
})
app.listen(5000)