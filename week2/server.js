const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

dotenv.config();

const app = express();
app.use(express.json());

// connect DB
connectDB();

// routes
app.use('/contacts', require('./routes/contacts'));
// app.use('/temples', require('./routes/temple')); // ⛔ Disabled since temple.js is missing

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Server Error',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
