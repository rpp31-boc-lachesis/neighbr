require('dotenv').config();
const express = require('express');

const app = express();
const cookiePaser = require('cookie-parser');
const path = require('path');
const compression = require('compression');
const { login, logout, signup } = require('../controllers/authController');
const { getAll, getUsers, getOneUser, postUser } = require('../controllers/userController');
const { getRuns, addRun } = require('../controllers/runController');
const { getAllErrands, getErrandById } = require('../controllers/errandController');
const { locationSearch } = require('../controllers/locationSearch');
const { authMiddleware } = require('../db/auth/passport');
const { getLocations } = require('../controllers/locationController');

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());

app.post('/login', login);
app.get('/logout', logout);
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
// add auth here to make sure after refresh, user still login
app.get('/*', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
