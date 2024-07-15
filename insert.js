const { dbConnect } = require('./mongoose')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([
        { name: "note 5", brand: "vivo", price: "10000", category: "mobile" },
          { name: "max pro", brand: "iphone", price: "12000", category: "mobile" }
    ]
    )
    console.log(result, "resultresultresult")
    console.log(db)
}
insert()