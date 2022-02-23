const mongoose = require('mongoose');

const { Schema } = mongoose;

const runSchema = new Schema({
  location: { type: Schema.Types.ObjectId, ref: 'Location' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: String,
  startTime: String,
  endTime: String,
  transportation: String,
  acceptedErrands: [{ type: Schema.Types.ObjectId, ref: 'Errand' }]
});

module.exports = runSchema;
