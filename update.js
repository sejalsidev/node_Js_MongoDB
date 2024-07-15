const { dbConnect } = require('./mongoose')

const updateData = async () => {
    const db = await dbConnect();
    // console.log(db)
    const result = await db.updateOne(
        { name: 'note 5' }, { $set: { name: 'max pro 5' } }
    )
    console.log(result)
}
updateData()