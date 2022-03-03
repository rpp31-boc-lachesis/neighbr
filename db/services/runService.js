const mongoose = require('mongoose');
const { Run, Location, Users } = require('../models/index.js');
const { addRunToUserHist } = require('./userService.js')

const getAllRuns = (callback) => {
  Run.find()
    .lean()
    .populate({ path: 'location', populate: { path: 'errands', populate: { path: 'requester', select: '-password -salt' } } })
    .populate({ path: 'user', select: '-password -salt' })
    .populate('acceptedErrands')
    // .populate('declinedErrands')
    // .populate('completedErrands')
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => { callback(err, null); });
};

const getRun = (filter, callback) => {
  Run.find(filter)
    .lean()
    .populate('acceptedErrands')
    .populate('location')
    .populate({ path: 'user', select: '-password -salt' })
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => { callback(err, null); });
};

const getRunById = (id, callback) => {
  Run.findById(id)
    .lean()
    .populate('acceptedErrands')
    .populate('location')
    .populate({ path: 'user', select: '-password -salt' })
    .then((result) => { callback(null, result); })
    .catch((err) => { callback(err, null); });
};

const postRun = (body, callback) => {
  const { run, location } = body.data;
  const locationObj = {
    mapboxId: location.id,
    placeText: location.text,
    placeName: location.place_name,
    address: location.properties.address,
    coordinates: location.geometry.coordinates,
    category: location.properties.category,
  };
  location.context.forEach((con) => {
    const key = con.id.split('.')[0];
    locationObj[key] = con.text;
  });
  Location.findOne({ mapboxId: locationObj.mapboxId })
    .then((result) => {
      if (result === null) {
        const newLoc = new Location(locationObj);
        return newLoc.save();
      }
      return result;
    })
    .then((result) => {
      run.location = result._id;
      return Users.findOne({ username: run.userName });
    })
    .then((retUser) => {
      console.log(retUser)
      run.user = retUser._id;
      return Run.create(run);
    })
    .then((newRun) => {
      Location.findOne({ mapboxId: locationObj.mapboxId })
        .then((loc) => {
          loc.runs.push(newRun._id);
          loc.save();
        })
      return newRun;
    })
    .then((newRun) => {
      Users.findOneAndUpdate(
        { _id: run.user},
        { $push: { run_history: newRun._id } }
      )
        .then((resp) => {
          console.log(resp);
          return newRun;
        })
        .then((newRun) => {
          callback(null, newRun);
        })
        .catch((err) => { console.log(err); });
      // addRunToUserHist(newRun._id, run.user);
      return newRun;
    })
    .catch((err) => { callback(err, null); });
};
const updateRun = (body, callback) => {
  const {
    runID,
    errandID,
    type,
    map
  } = body;

  Run.findOneAndUpdate(
    { _id: runID },
    {
      $set: {
        $push: { [type]: errandID },
        [`map.${errandID}`]: map
      }
    }
  )
    .then(() => callback(null))
    .catch((err) => callback(err));
};
const updateRunNoMap = (body, callback) => {
  const {
    runID,
    errandID,
    type
  } = body.data;

  const update = { [type]: errandID };
  Run.findOneAndUpdate(
    { _id: runID },
    { $push: update }
  )
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => callback(err, null));
};

module.exports = {
  getAllRuns,
  getRun,
  getRunById,
  postRun,
  updateRun,
  updateRunNoMap,
};
