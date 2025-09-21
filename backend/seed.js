const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

async function seed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('contacts'); // ✅ use the correct DB
    const collection = db.collection('contacts'); // ✅ collection name

    await collection.deleteMany({}); // clear existing data

    await collection.insertMany([
      { firstName: "Alice", lastName: "Smith", email: "alice@example.com", favoriteColor: "blue", birthday: "1990-05-15" },
      { firstName: "Bob", lastName: "Jones", email: "bob@example.com", favoriteColor: "red", birthday: "1985-10-30" },
      { firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", favoriteColor: "green", birthday: "1992-08-08" }
    ]);

    console.log("✅ Seed data inserted!");
  } finally {
    await client.close();
  }
}

seed();
