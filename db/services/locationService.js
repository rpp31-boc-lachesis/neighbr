const { Location } = require('../models/index.js');

const createLocation = (locationObject, callback) => {
  Location.create(locationObject)
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getAllLocations = (callback) => {
  Location.find()
    // .lean()
    .populate('runs')
    .populate('errands')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getLocation = (filter, callback) => {
  Location.find(filter)
    // .lean()
    .populate('runs')
    .populate({ path: 'errands', populate: { path: 'requester' } })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getLocationById = (id, callback) => {
  Location.findById(id)
    // .lean()
    .populate('runs')
    .populate('errands')
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const getOrCreateLocation = (location, callback) => {
  const { mapboxId } = location;
  Location.findOne({ mapboxId })
    .lean()
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

module.exports = {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
  getOrCreateLocation,
};
