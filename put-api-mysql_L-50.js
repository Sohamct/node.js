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

app.put("/:id", (req, resp) => {
    // const data = ["varad", "8080", "reader", 1]
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id]
    conn.query("update test  SET name = ?, password = ?, user_type = ? where id = ?", data, (error, result, fields) => {
            if (error) throw error
            if (result.affectedRows == 0) {
                const insert_data = { name: req.body.name, password: req.body.password, user_type: req.body.user_type }
                conn.query('INSERT INTO test SET ?', insert_data, (error, result2, fields) => {
                    if (error) throw error;
                    result = result2
                })
            }
            resp.send(result)
        })
        // resp.send("update api working.")
})
app.listen(5000)