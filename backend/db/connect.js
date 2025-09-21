// db/connect.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

let _db;

const initDb = async (callback) => {
  if (_db) {
    console.log('DB already initialized!');
    return callback(null, _db);
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    const err = new Error('MONGODB_URI not set in environment');
    console.error(err.message);
    return callback(err);
  }

  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    _db = client.db(); // use the default database from URI
    console.log('✅ MongoDB connected');
    callback(null, _db);
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    callback(err);
  }
};

const getDb = () => {
  if (!_db) {
    throw new Error('DB not initialized');
  }
  return _db;
};

module.exports = { initDb, getDb };
