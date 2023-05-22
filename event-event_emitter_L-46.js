//events: mostly used in javascript and html.
//here in html emitter = button

//in node js we can make emitter using only api.
const express = require("express")
const EventEmitter = require("events")
    //EventEmitter is a class.
const app = express()
const event = new EventEmitter()

let count = 0

event.on("countAPI", () => { //(name of even, callback fucntion)
    count++;
    console.log("event called ", count)
})

app.get("/search", (req, resp) => {
    resp.send("search api called")
    event.emit("countAPI")
});

app.get("/", (req, resp) => {
    resp.send("api called")
    event.emit("countAPI")
});

app.get("/update", (req, resp) => {
    resp.send("api called")
    event.emit("countAPI")
});


app.listen(5000)