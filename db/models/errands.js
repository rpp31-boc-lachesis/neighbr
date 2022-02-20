const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = Schema({
  category: String,
  req_items: {
    item: String,
    quantity: Number,
    weight: String,
    size: String,
    notes: String,
    status: String,
    requester: { type: mongoose.Types.ObjectId, ref: 'User' },
    runner: { type: mongoose.Types.ObjectId, ref: 'User' },
    transportation: String
  },
  message: {
    requester: mongoose.Types.ObjectId,
    notes: String
  },
  pickup: {
    store: String,
    address: String
  },
  dropoff: {
    requester: { type: mongoose.Types.ObjectId, ref: 'User' },
    address: String
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  received_rating: {
    requester: { type: mongoose.Types.ObjectId, ref: 'User' },
    rating: Number
  }
});

// const Errand = mongoose.model('Errand', errandSchema);
module.exports = errandSchema;
