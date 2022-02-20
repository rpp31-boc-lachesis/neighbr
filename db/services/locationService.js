const { Location } = require('../models/index.js');

const createLocation = (locationObject, callback) => {
  Location.create(locationObject)
    .lean()
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllLocations = (callback) => {
  Location.find()
    .lean()
    .populate('runs')
    .populate('errands')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getLocation = (filter, callback) => {
  Location.find(filter)
    .lean()
    .populate('runs')
    .populate('errands')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getLocationById = (id, callback) => {
  Location.findById(id)
    .lean()
    .populate('runs')
    .populate('errands')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getOrCreateLocation = (location, callback) => {
  Location.findOne(location)
    .lean()
    // .populate({ path: 'runs', model: 'User', populate: { path: 'user', model: 'User'}, populate: { path: location, model: 'Loation' } })
    .populate('runs')
    .then((resp) => {
      if (resp !== null) {
        callback(null, resp);
      } else {
        Location.create(location)
          .then((resp) => { callback(null, resp); })
          .catch((err) => { callback(err, null); });
      }
    })
    .catch((err) => { callback(err, null); });
};

const addRunToLocation = (runId, locationId, callback) => {
  Location.findByIdAndUpdate(locationId, { $push: { runs: runId } })
    .lean()
    .then((resp) => { callback(null, resp); })
    .catch((err) => { callback(err, null); });
};

module.exports = {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
  getOrCreateLocation,
  addRunToLocation,
};
