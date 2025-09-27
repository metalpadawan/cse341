const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let _db;

const initDb = async (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    _db = client.db(); // will use "contacts" if in your URI
    console.log('Database initialized');
    callback(null, _db);
  } catch (err) {
    console.error('Failed to connect:', err);
    callback(err);
  }
};

const getDb = () => {
  if (!_db) throw new Error('Database not initialized');
  return _db;
};

module.exports = { initDb, getDb };
