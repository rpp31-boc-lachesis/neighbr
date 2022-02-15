const mongoose = require('mongoose');

const { Schema } = mongoose;

const errands = Schema({
  category: String,
  req_items: {
    item: String,
    quantity: Number,
    weight: String,
    size: String,
    notes: String,
    status: String,
    requester: Schema.types.ObjectId,
    runner: Schema.types.ObjectId,
    transportation: String
  },
  message: {
    requester: Schema.types.ObjectId,
    notes: String
  },
  pickup: {
    store: String,
    address: String
  },
  dropoff: {
    requester: Schema.types.ObjectId,
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

const Errands = mongoose.model('Errands', errands);
module.exports = Errands;
