const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
  mapboxId: String,
  placeText: String,
  placeName: String,
  address: String,
  category: String,
  neighborhood: String,
  postcode: String,
  coordinates: Array,
  region: String,
  runs: [{ type: Schema.types.ObjectId, ref: 'Run' }],
  errands: [{ type: Schema.types.ObjectId, ref: 'Errands' }],
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
