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
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};

module.exports.addRun = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
