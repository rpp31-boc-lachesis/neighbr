const {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
} = require('../db/services/locationService.js');

module.exports.addLocation = (locationObj, callback) => {
  createLocation(locationObj, callback);
};

module.exports.getOrAddLocation = (locationObj, callback) => {
  getLocation(locationObj, (err, data) => {
    if (err) { callback(err, null); }

    if (err === null && data === null) {
      createLocation((locationObj), callback);
    } else {
      callback(null, data);
    }
  });
};
