const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  mapboxId: String,
  placeText: String,
  placeName: String,
  address: String,
  category: String,
  neighborhood: String,
  postcode: String,
  coordinates: Array,
  region: String,
  runs: [{ type: mongoose.Types.ObjectId, ref: 'Run' }],
  errands: [{ type: mongoose.Types.ObjectId, ref: 'Errands' }],
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
