const express = require('express')
const { dbConnect } = require('./mongoose')
const mongodb = require('mongodb')
const app = express()
app.use(express.json())
app.get('/', async (req, res) => {
    let db = await dbConnect()
    db = await db.find().toArray()
    console.log(db)
    res.send(db)
})

app.post('/', async (req, res) => {
    let data = await dbConnect()
    let result = data.insertOne(req.body)
    // console.log(req.body)
    //res.send({ name: 'peter' })
    res.send({
        status: 200,
        message: "data add success"
    })

})

app.put('/', async (req, res) => {
    console.log(req.body)
    let db = await dbConnect()
    let result = await db.updateOne({ name: "max pro" },
        { $set: { price: 900 } }
    )
    res.send({
        status: 200,
        message: "data update success"
    })
})

app.delete('/:id', async (req, res) => {
    let db = await dbConnect()
    let result = await db.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    //res.send(result)
    res.send({ status: 200, message: "data delete row success" })
})
app.listen(5000)