// routes/contacts.js
const express = require('express');
const router = express.Router();
const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
  try {
    const db = mongodb.getDb();
    const contacts = await db.collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    const db = mongodb.getDb();
    const contact = await db.collection('contacts').findOne({ _id: new ObjectId(id) });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching contact' });
  }
});

module.exports = router;
