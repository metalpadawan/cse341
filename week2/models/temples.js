const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  temple_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  location: String,
  dedicated: String,
  additionalInfo: String,
});

module.exports = mongoose.model('Temple', templeSchema);
