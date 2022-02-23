require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const compression = require('compression');
const passport = require('passport');
const { login, signup } = require('../controllers/authController');
const {
  getAll,
  getUsers,
  getOneUser,
  postUser
} = require('../controllers/userController');
const { getRuns, addRun } = require('../controllers/runController');
const { getAllErrands, getErrandById } = require('../controllers/errandController');
const { locationSearch } = require('../controllers/locationSearch');
require('../db/auth/passport')(passport);
const { getLocations } = require('../controllers/locationController');

// middleware
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', login);
app.post('/signup', signup);

app.get('/allusers', getAll);
app.get('/users', getUsers);
app.get('/users/:username', getOneUser);
app.post('/users', postUser);

app.get('/locations', getLocations);
app.post('/locations/search', locationSearch);

app.get('/runs', getRuns);
app.post('/runs', addRun);

app.get('/errands', getAllErrands);
app.get('/requestStatus/:id', getErrandById);

// Catch all route for redirect must be last so others can fire first! :)
// passport.authenticate('jwt', { session: false })
// add auth here to make sure after refresh, user still login
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// passport.authenticate('jwt', { session: false }),
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
