// seed.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const contacts = [
  { firstName: "Alice", lastName: "Smith", email: "alice@example.com", favoriteColor: "blue", birthday: "1990-05-15" },
  { firstName: "Bob", lastName: "Jones", email: "bob@example.com", favoriteColor: "red", birthday: "1985-10-30" },
  { firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", favoriteColor: "green", birthday: "1992-08-08" }
];

(async () => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(); // db name from URI
    await db.collection('contacts').deleteMany({});
    const result = await db.collection('contacts').insertMany(contacts);
    console.log('Inserted', result.insertedCount, 'contacts');
    await client.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
