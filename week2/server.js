const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connection');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Connect to DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
    console.log(`📖 Swagger docs at http://localhost:${port}/api-docs`);
  });
});
