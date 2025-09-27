// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for storing and retrieving contacts',
  },
  host: 'localhost:8080', // change to Render URL when deployed
  schemes: ['http', 'https'],
  definitions: {
    Contact: {
      _id: '68cf1f4b902557563a2b98d8',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      favoriteColor: 'blue',
      birthday: '1990-05-15'
    },
    NewContact: {
      firstName: 'Dana',
      lastName: 'White',
      email: 'dana@example.com',
      favoriteColor: 'purple',
      birthday: '1995-12-01'
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
