require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const compression = require('compression');
const passport = require('passport');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { getRuns, addRun } = require('../controllers/runController');
const { locationSearch } = require('../controllers/locationSearch');
require('../db/auth/passport')(passport);

const router = express.Router();
// middleware
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', authController.login);
app.post('/signup', authController.signup);

app.get('/users', userController.getAllUsers);
app.get('/users/:username', userController.getOneUser);
app.post('/users', userController.postUser);

app.post('/locations/search', locationSearch);

app.get('/runs', getRuns);
app.post('/runs', addRun);

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

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).json({ success: true, msg: 'You are successfully authenticated to this route!'});
});
// passport.authenticate('jwt', { session: false }),
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
