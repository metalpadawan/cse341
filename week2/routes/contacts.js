// routes/contacts.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - favoriteColor
 *         - birthday
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         favoriteColor:
 *           type: string
 *         birthday:
 *           type: string
 *           format: date
 */

// GET all contacts
router.get('/', controller.getAll);

// GET contact by ID
router.get('/:id', controller.getSingle);

// POST create a new contact
router.post('/', controller.createContact);

// PUT update a contact
router.put('/:id', controller.updateContact);

// DELETE a contact
router.delete('/:id', controller.deleteContact);

module.exports = router;
