const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = Schema({
  category: String,
  requester: { type: Schema.Types.ObjectId, ref: 'User' },
  runner: { type: Schema.Types.ObjectId, ref: 'User' },
  run: { type: Schema.Types.ObjectId, ref: 'Run' },
  req_items: [
    {
      item: String,
      quantity: Number,
      status: String // ['Cancelled', 'In-Progress', 'Completed']
    },
  ],
  weight: String,
  size: String,
  transportation: String,
  message: String,
  pickup: {
    store: String,
    address: String,
    locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
  },
  dropoff: {
    address: String,
    note: String,
    locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  given_rating: {
    runner: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: Number
  },
});

// const Errand = mongoose.model('Errand', errandSchema);
module.exports = errandSchema;
