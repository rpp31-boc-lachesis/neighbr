const mongoose = require('mongoose');

const { Schema } = mongoose;

const runSchema = new Schema({
  locationId: Schema.types.ObjectId,
  userId: Schema.types.ObjectId,
  date: Date,
  time: Date,
  endTime: Date,
  acceptedErrands: [{ type: Schema.types.ObjectId, ref: 'Errands' }]
});

const Run = mongoose.model('Run', runSchema);

module.exports = Run;
