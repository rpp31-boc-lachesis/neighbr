const mongoose = require('mongoose');

const errandSchema = mongoose.Schema({
  category: String,
  req_items: {
    item: String,
    quantity: Number,
    weight: String,
    size: String,
    notes: String,
    status: String,
    requester: String,
    runner: String,
    transportation: String
  },
  message: {
    requester: String,
    notes: String
  },
  pickup: {
    store: String,
    address: String
  },
  dropoff: {
    requester: String,
    address: String
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  received_rating: {
    requester: String,
    rating: Number
  }
});

const Errands = mongoose.model('Errand', errandSchema);
module.exports = Errands;
