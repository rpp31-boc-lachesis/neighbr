const mongoose = require('mongoose');

const { Schema } = mongoose;

const runSchema = new Schema({
  complete: { type: Boolean, default: false },
  location: { type: Schema.Types.ObjectId, ref: 'Location' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: String,
  startTime: String,
  endTime: String,
  transportation: String,
  acceptedErrands: [{ type: Schema.Types.ObjectId, ref: 'Errand' }],
  declinedErrands: [{ type: Schema.Types.ObjectId, ref: 'Errand' }],
  completedErrands: [{ type: Schema.Types.ObjectId, ref: 'Errand' }],
  mapMarkers: Object
});

module.exports = runSchema;
