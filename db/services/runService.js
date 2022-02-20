const { Run } = require('../models/index.js');

const createRun = (runObject, callback) => {
  console.log(runObject);
  Run.create(runObject)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllRuns = (callback) => {
  Run.find({})
    .lean()
    .populate('acceptedErrands')
    .populate('location')
    .populate('user')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getRun = (filter, callback) => {
  Run.find(filter)
    .lean()
    .populate('acceptedErrands')
    .populate('location')
    .populate('user')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getRunById = (id, callback) => {
  Run.findById(id)
    .lean()
    .populate('acceptedErrands')
    .populate('location')
    .populate('user')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

module.exports = {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
};
