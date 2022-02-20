const axios = require('axios');
const {
  createRun,
  getAllRuns,
  getRun,
  getRunById,
} = require('../db/services/runService.js');
const {
  getOrCreateLocation,
  addRunToLocation
} = require('../db/services/locationService.js');

module.exports.getRuns = (req, res) => {
  getAllRuns((err, data) => {
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
  const { run, location } = req.body.data;
  const { id, text, place_name } = location;
  console.log(req.body);
  let locationId;
  let runWithId;
  const locationObj = {
    mapboxId: id,
    placeText: text,
    placeName: place_name,
    coordinates: location.geometry.coordinates,
  };
  if (location.properties.hasOwnProperty('address')) {
    locationObj.address = location.properties.address;
  }
  if (location.properties.hasOwnProperty('category')) {
    locationObj.category = location.properties.category;
  }
  const categories = ['neighborhood', 'postcode', 'region'];

  Promise.resolve(location.context.forEach((con) => {
    const desc = con.id.split('.')[0];
    if (categories.includes(desc)) {
      locationObj[desc] = con.text;
    }
  }))
    .then(() => getOrCreateLocation(locationObj, (err, data) => {
      if (data === undefined) {
        return;
      }
      if (err) {
        throw new Error(err);
      } else {
        console.log('getorcreate data', data);
        locationId = data._id;
      }
    }))
    .then(() => {
      console.log('RUNRUNRUN', run);
      run.locationId = locationId;
      console.log('RunWithId', run);
      return createRun(runWithId, (err, data) => {
        if (data === undefined) {
          return('already created');
        }
        if (err) {
          throw new Error(err);
        } else {
          console.log('createRun runwithId data --->', data);
          addRunToLocation(data._id, locationId, (err, data) => {
            if (err) {
              throw new Error(err);
            } else {
              return data;
            }
          });
        }
      });
    })
    .then((response) => { res.send(response); })
    .catch((err) => { res.status(500).send(err.message); });
};
