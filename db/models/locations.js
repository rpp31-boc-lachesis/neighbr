const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  mapboxId: { type: String, index: true },
  placeText: String,
  placeName: String,
  address: String,
  category: String,
  neighborhood: String,
  postcode: String,
  coordinates: Array,
  region: String,
  runs: [{ type: mongoose.Types.ObjectId, ref: 'Run' }],
  errands: [{ type: mongoose.Types.ObjectId, ref: 'Errand' }],
});

// const Location = mongoose.model('Location', locationSchema);

module.exports = locationSchema;
