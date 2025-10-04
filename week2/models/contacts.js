// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    favoriteColor: { type: String, default: 'Unknown' },
    birthday: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
