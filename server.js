const express = require('express');
const app = express();
const lesson1Controller = require('./lesson1');

app.get('/', lesson1Controller.mangaRoute);
app.get('/dcu', lesson1Controller.jamesRoute);

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});