const path = require('path');
const compression = require('compression');
const express = require('express');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = app;
