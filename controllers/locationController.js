const {
  getAllLocations,
  getOrCreateLocation,
  getLocationById
} = require('../db/services/locationService.js');

module.exports.getLocationById = (req, res) => {
  const locationId = req.params.id;
  getLocationById(locationId, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.getOrAddLocation = (req, res) => {
  getOrCreateLocation(req.location, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.getLocations = (req, res) => {
  getAllLocations((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};
