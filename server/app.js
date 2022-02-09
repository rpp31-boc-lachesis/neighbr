const express = require('express');
const path = require('path');
const compression = require('compression');
const userController = require('../controllers/userController');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', userController.getAllUsers);
app.get('/users/:username', userController.getOneUser);
app.post('/users', userController.postUser);
// Catch all route for redirect must be last so others can fire first! :)
app.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = app;
