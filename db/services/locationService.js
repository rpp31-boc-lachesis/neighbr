const { Location } = require('../models/index.js');

const createLocation = (locationObject, callback) => {
  Location.create(locationObject)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllLocations = (callback) => {
  Location.find()
    .populate({ path: 'runs' })
    .populate({ path: 'errands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getLocation = (filter, callback) => {
  Location.find(filter)
    .populate({ path: 'runs' })
    .populate({ path: 'errands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getLocationById = (id, callback) => {
  Location.findById(id)
    .populate({ path: 'runs' })
    .populate({ path: 'errands' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

module.exports = {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
};
