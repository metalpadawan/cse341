const routes = require('express').Router();
const lesson1Controller = require('../lesson1');

routes.get('/', lesson1Controller.mangaRoute);
routes.get('/dcu', lesson1Controller.jamesRoute);

module.exports = routes;
