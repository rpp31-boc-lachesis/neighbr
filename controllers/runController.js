const axios = require('axios');
const {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
} = require('../db/services/runService.js');
const {
  getLocation,
  getOrAddLocation,
  getOrCreateLocation,
  addRunToLocation
} = require('./locationController');

module.exports.getRuns = async (req, res) => {
  await getAllRuns((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.addRun = (req, res) => {
  createRun(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.buildRun = (req, res) => {
  const { run, destination } = req.body;
  let locationId;
  let runWithId;
  console.log(destination);
  const location = {
    mapboxId: destination.id,
    placeText: destination.text,
    placeName: destination.place_name,
    address: destination.properties.address,
    category: destination.properties.category,
    coordinates: destination.geometry.coordinates,
  };
  const categories = ['neighborhood', 'postcode', 'region'];

  Promise.resolve(destination.context.forEach((con) => {
    const desc = con.id.split('.')[0];
    if (categories.includes(desc)) {
      location[desc] = con.text;
    }
  }))
    .then(() => Promise.resolve(getOrCreateLocation(destination, (err, data) => {
      if (err) {
        throw new Error(err);
      } else {
        locationId = data._id;
      }
    })))
    .then(() => {
      runWithId = run;
      runWithId.locationId = locationId;
      return createRun(runwithId, (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          addRunToLocation(data._id, locationId, (err, data) => {
            if (err) {
              throw new Error(err);
            }
          });
        }
      });
    })
    .then((response) => { res.send(response); })
    .catch((err) => res.status(500).send(err.message));
};
