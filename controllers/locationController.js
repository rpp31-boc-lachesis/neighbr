const {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
} = require('../db/services/locationService.js');

module.exports.addLocation = (locationObj, callback) => {
  createLocation(locationObj, callback);
};
