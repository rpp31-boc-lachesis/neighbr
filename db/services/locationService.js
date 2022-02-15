const Run = require('../models/runs.js');

const getAllRuns = (callback) => {
  Run.find().populate
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
}

const getRun = (filter, callback) => {
  Run.find(filter)
    .populate('acceptedErrands')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};