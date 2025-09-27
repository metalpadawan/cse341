// db/connect.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

let _db;

const initDb = async (callback) => {
  if (_db) {
    console.log('Database already initialized');
    return callback(null, _db);
  }
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    _db = client.db('contacts'); // use Atlas DB name exactly (you confirmed 'contacts')
    console.log('MongoDB connected');
    callback(null, _db);
  } catch (err) {
    callback(err);
  }
};

const getDb = () => {
  if (!_db) throw new Error('Database not initialized');
  return _db;
};

module.exports = { initDb, getDb };
