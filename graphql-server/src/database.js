const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");
 
let database = null;
 
const mongo = new MongoMemoryServer();
 
async function startDatabase() {
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });
 
  //Seed Database
  if (!database) {
    database = connection.db();
    await database.collection("persons").insertMany(data.Persons);
  }
 
  return database;
}
 
async function stopDatabase() {
  await mongo.stop();
}
 
module.exports = {
  startDatabase,
  stopDatabase,
};
