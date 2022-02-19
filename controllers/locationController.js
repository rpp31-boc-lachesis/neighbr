const {
  createLocation,
  getAllLocations,
  getLocation,
  getLocationById,
} = require('../db/services/locationService.js');

module.exports.addLocation = async (req, res) => {
  await getAllRuns((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.getOrAddLocation = (req, res) => {
  getLocation(req.body.location, (err, data) => {
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
