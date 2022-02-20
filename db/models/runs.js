const mongoose = require('mongoose');

const { Schema } = mongoose;

const runSchema = new Schema({
  location: { type: mongoose.Types.ObjectId, ref: 'Location' },
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  date: Date,
  time: Date,
  endTime: Date,
  transportation: String,
  acceptedErrands: [{ type: mongoose.Types.ObjectId, ref: 'Errand' }]
});

// const Run = mongoose.model('Run', runSchema);

module.exports = runSchema;
