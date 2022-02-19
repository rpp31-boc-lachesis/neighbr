require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const { getAllUsers, getOneUser, postUser } = require('../controllers/userController');
const { getRuns, addRun, buildRun } = require('../controllers/runController');
const { getAllErrands } = require('../controllers/errandController');
const { locationSearch } = require('../controllers/locationSearch');
const { getLocations, getOrAddLocation } = require('../controllers/locationController');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', getAllUsers);
app.get('/users/:username', getOneUser);
app.post('/users', postUser);

app.get('/locations', getLocations);
app.post('/locations/search', locationSearch);
app.post('/locations/getOrAdd', getOrAddLocation);

app.get('/runs', getRuns);
app.post('/runs', addRun);
app.post('/runs/post', buildRun);

app.get('/errands', getAllErrands);
// Catch all route for redirect must be last so others can fire first! :)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
