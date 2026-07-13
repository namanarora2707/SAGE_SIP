import {MongoClient} from "mongodb"; 
const dbname = "sage";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
async function dbconnection() {
  try {
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection("students");
    const result = await collection.find().toArray();
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
dbconnection();
