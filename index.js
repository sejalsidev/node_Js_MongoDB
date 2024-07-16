const express = require('express')
const multer = require('multer')
require('./config')
const product = require('./Product')
const app = express();
app.use(express.json())

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.filename + "-" + Date.now() + ".jpg")
        }

    })
}).single("upload_file")

app.post("/upload", upload, (req, res) => {
    res.send("upoad file")
})

app.post("/create", async (req, res) => {
    console.log(req.body)
    let data = new product(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key)
    let data = await product.find({
        "$or": [{ "name": { $regex: req.params.key } },
        { "brand": { $regex: req.params.key } }
        ]
    })
    res.send(data)
})

app.get("/list", async (req, res) => {
    let data = await product.find()
    res.send(data)

})
app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    res.send(data)

})
app.put("/update/:_id", async (req, res) => {
    // console.log(req.params)
    let data = await product.updateOne({ name: 'm8' },
        { $set: { price: 12000 } })
    res.send(data)

})

app.listen(1000)




// const mongoose = require('mongoose')

// const savInDB = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-comm').then(async () => {
//         const productSchema = new mongoose.Schema({
//             name: String,
//             price: Number,
//             brand: String,
//             category: String
//         }, { versionKey: false })
//         const productModel = new mongoose.model('product', productSchema)


//         let data = new productModel({ name: 'm8', price: 10000, brand: 'vivo', category: 'mobile' })

//         await data.save()
//     }
//     ).catch((e) => {
//         console.log("Not connected", e.message)
//     }
//     )

// }
// savInDB()

// const updateInDB = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-comm').then(async () => {
//         const productSchema = new mongoose.Schema({
//             name: String,
//             price: Number,
//             brand: String,
//             category: String
//         }, { versionKey: false })

//         const productModel = new mongoose.model('product', productSchema)

//         let data = await productModel.updateOne({ name: 'm8' }, {
//             $set: { price: 500 }

//         }
//         )
//         console.log(data)
//     }).catch(() => {
//         console.log("updateInDB not connected")
//     })
// }
// updateInDB()


// const deleteInDB = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-comm').then(async () => {
//         const productSchema = new mongoose.Schema({
//             name: String,
//             price: Number,
//             brand: String,
//             category: String
//         }, { versionKey: false })
//         const productModel = new mongoose.model('product', productSchema)
//         let data = await productModel.deleteMany({ name: 'gdfgdfdfg' })
//         console.log(data)
//     }).catch((e) => {
//         console.log("deleteInDB not connected")
//     })
// }
// deleteInDB()

// const findInDB = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-comm').then(async () => {
//         const productSchema = new mongoose.Schema({
//             name: String,
//             price: Number,
//             brand: String,
//             category: String
//         }, { versionKey: false })
//         const productModel = new mongoose.model('products', productSchema)
//         let data = await productModel.find({ name: 'm8' })
//         console.log(data)
//     }).catch((e) => {
//         console.log("findInDB not connected", e.message)
//     })
// }
// findInDB()