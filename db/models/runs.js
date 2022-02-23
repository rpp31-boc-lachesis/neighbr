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

// runSchema.virtual('user', {
//   justOne: true,
//   localField: 'userId',
//   foreignField: '_id',
//   ref: 'User',
// });

// runSchema.virtual('location', {
//   justOne: true,
//   localField: 'userId',
//   foreignField: '_id',
//   ref: 'Location',
// });

// const Run = mongoose.model('Run', runSchema);

module.exports = runSchema;
