const axios = require('axios');
const {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
} = require('../db/services/runService.js');
const {
  getLocation,
  getOrAddLocation,
} = require('./locationController');

module.exports.getRuns = async (req, res) => {
  await getAllRuns((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.addRun = (req, res) => {
  createRun(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};
