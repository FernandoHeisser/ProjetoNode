const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionsController = require('./controllers/sessionsController');

const routes = express.Router();

routes.get('/incidents', incidentController.index);

routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', incidentController.delete);

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionsController.create);

module.exports = routes;