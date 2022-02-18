const mongoose = require('mongoose');

const { Schema } = mongoose;
const Errands = require('./errands.js');

const runSchema = new Schema({
  locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
  userId: mongoose.Types.ObjectId,
  date: Date,
  time: Date,
  endTime: Date,
  acceptedErrands: [{ type: mongoose.Types.ObjectId, ref: 'Errands' }]
});

module.exports = runSchema;
