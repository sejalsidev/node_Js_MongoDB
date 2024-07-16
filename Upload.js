const express = require('express')
const app = express();
const multer = require('multer')

app.post("/upload", async (req, res) => {
    res.send("upoad file")
})
app.listen(2000)