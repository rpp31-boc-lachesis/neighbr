const mongoose = require('mongoose');

const axios = require('axios');
const {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
  postRun,
} = require('../db/services/runService.js');
const {
  getLocation,
  createLocation,
  getOrCreateLocation,
  addRunToLocation
} = require('../db/services/locationService.js');
const { getOneUser } = require('../db/services/userService');

const returnCallback = (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    return data;
  }
};

module.exports.getRuns = (req, res) => {
  getAllRuns((err, data) => {
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

module.exports.buildRun = (req, res) => {
  postRun(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};
