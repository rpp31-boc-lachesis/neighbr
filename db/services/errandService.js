const { Errand } = require('../models/index.js');

const createErrand = (errandObject, callback) => {
  Errand.create(errandObject)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllErrands = (callback) => {
  Errand.find()
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getErrand = (filter, callback) => {
  Errand.find(filter)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getErrandById = (id, callback) => {
  Errand.findById(id)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

module.exports = {
  createErrand,
  getAllErrands,
  getErrand,
  getErrandById,
};
