const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'e-comm'

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database)
    // console.log("connected")
    return db.collection('product')
}
module.exports = { dbConnect };