// npm i multer
// make router for upload file.
// write code for upl
const express = require('express')
const multer = require('multer')
const app = express()

// here upload is middleware.
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "uploads")
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")

app.post("/upload", upload, (req, resp) => {
    resp.send("file uploaded")
})

app.listen(5000)
    // we upload file without multer, byt code would be lengthier.