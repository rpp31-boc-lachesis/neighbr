const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = Schema({
  id: Number,
  category: String,
  requester: mongoose.Types.ObjectId,
  runner: mongoose.Types.ObjectId,
  req_items: [
    {
      item: String,
      quantity: Number,
      status: String // ['Declined', 'Active', 'In-Progress', 'Completed']
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
    runner: mongoose.Types.ObjectId,
    rating: Number
  },
});

// const Errand = mongoose.model('Errand', errandSchema);
module.exports = errandSchema;
