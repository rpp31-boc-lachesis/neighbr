const { Run } = require('../models/index.js');

const createRun = (runObject, callback) => {
  Run.create(runObject)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllRuns = (callback) => {
  Run.find({})
    .populate({ path: 'acceptedErrands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getRun = (filter, callback) => {
  Run.find(filter)
    .populate({ path: 'acceptedErrands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getRunById = (id, callback) => {
  Run.find(id)
    .populate({ path: 'acceptedErrands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

module.exports = {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
};
