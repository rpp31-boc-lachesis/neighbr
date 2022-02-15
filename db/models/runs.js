const mongoose = require('mongoose');

const { Schema } = mongoose;

const runSchema = new Schema({
  locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
  userId: mongoose.Types.ObjectId,
  date: Date,
  time: Date,
  endTime: Date,
  acceptedErrands: [{ type: mongoose.Types.ObjectId, ref: 'Errands' }]
});

const Run = mongoose.model('Run', runSchema);

module.exports = Run;
