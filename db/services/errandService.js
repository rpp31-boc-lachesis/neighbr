const Errand = require('../models/errands.js');

const createErrand = (errandObject, callback) => {
  Errand.create(errandObject)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllErrands = (callback) => {
  Errand.find()
    .populate({ path: 'runs' })
    .populate({ path: 'errands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getErrand = (filter, callback) => {
  Errand.find(filter)
    .populate({ path: 'runs' })
    .populate({ path: 'errands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getErrandById = (id, callback) => {
  Errand.findById(id)
    .populate({ path: 'runs' })
    .populate({ path: 'errands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

module.exports = {
  createErrand,
  getAllErrands,
  getErrand,
  getErrandById,
};
