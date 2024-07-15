const { dbConnect } = require('./mongoose')

const deleteData = async () => {
    const db = await dbConnect()
    const result = await db.deleteOne({ name: 'note 5' })
    console.log(result)
}
deleteData()