require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const mongoose = require('mongoose');
const userController = require('../controllers/userController');
const { getAllErrands } = require('../controllers/errandController');
const { getRuns, addRun } = require('../controllers/runController');
const { locationSearch } = require('../controllers/locationSearch');
const { getLocations } = require('../controllers/locationController');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', userController.getAllUsers);
app.get('/users/:username', userController.getOneUser);
app.post('/users', userController.postUser);

app.get('/locations', getLocations);
app.post('/locations/search', locationSearch);

app.get('/runs', getRuns);
app.post('/runs', addRun);

app.get('/errands', getAllErrands);
// Catch all route for redirect must be last so others can fire first! :)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
