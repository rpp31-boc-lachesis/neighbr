const express = require('express');
const path = require('path');
const compression = require('compression');
const userControllers = require('../controllers/users');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/');
});

app.get('/users', userControllers.getUser);
app.post('/users', userControllers.postUser);

module.exports = app;
