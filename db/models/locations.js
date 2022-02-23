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
  district: String,
  country: String,
  place: String,
  runs: [{ type: Schema.Types.ObjectId, ref: 'Run' }],
  errands: [{ type: Schema.Types.ObjectId, ref: 'Errand' }],
});

module.exports = locationSchema;
