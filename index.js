const { dbConnect } = require('./mongoose')
const main = async () => {
    // console.log("main function called")
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}
main()



// ---------------------------------------------------------------------------

// const express = require('express')
// const app = express();

// const reqFilter = require('./middleware')

// const route = express.Router();
// route.use(reqFilter)
// app.get('', (req, res) => {
//     res.send("This is Home Page")
// })
// app.get('/about', (req, res) => {
//     res.send("This is About Page")
// })
// route.get('/users', (req, res) => {
//     res.send("This is User page")
// })
// route.get('/contact', (req, res) => {
//     res.send("This is contact page")
// })
// app.use('/', route)


// app.listen(5000)