const mongoose = require('mongoose');

const axios = require('axios');
const {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
  postRun,
  updateRun
} = require('../db/services/runService.js');

const returnCallback = (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    return data;
  }
};

module.exports.updateRun = (req, res) => {
  updateRun(req.body, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send();
    }
  });
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
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};
