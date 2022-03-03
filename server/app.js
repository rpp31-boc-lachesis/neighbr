// require('dotenv').config();
const express = require('express');

const app = express();
const cookiePaser = require('cookie-parser');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const { login, logout, signup } = require('../controllers/authController');
const {
  getUsers,
  getOneUser,
  addRunToUser,
  getUserById,
  getUserPopulate,
  updateRating
} = require('../controllers/userController');
const {
  getRuns,
  addRun,
  buildRun,
  updateRun,
  updateRunNoMap,
} = require('../controllers/runController');
const {
  getAllErrands,
  getErrandById,
  addErrand,
  acceptErrand
} = require('../controllers/errandController');
const { locationSearch } = require('../controllers/locationSearch');
const { authMiddleware } = require('../db/auth/passport');
const { getLocations, getOrAddLocation, getLocationById } = require('../controllers/locationController');

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());

app.post('/login', login);
app.get('/logout', logout);
app.post('/signup', signup);

app.get('/users/populate/:username', getUserPopulate);
app.get('/users', getUsers);
app.get('/user/:id', getUserById);
app.get('/users/:username', getOneUser);
app.post('/users/addRun', addRunToUser);
app.put('/users/rate', updateRating);

app.get('/locations', getLocations);
app.get('/locations/:id', getLocationById);
app.post('/locations/search', locationSearch);
app.post('/locations/getOrAdd', getOrAddLocation);

app.get('/runs', getRuns);
app.post('/runs/add', addRun);
app.post('/runs/post', buildRun);
app.post('/runs/update', updateRun);
app.post('/runs/updateNoMap', updateRunNoMap);

app.get('/errands', getAllErrands);
app.get('/requestStatus/:id', getErrandById);
app.post('/errands/create', addErrand);
app.post('/errands/accept', acceptErrand);

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Catch all route for redirect must be last so others can fire first! :)
app.get('/*', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
