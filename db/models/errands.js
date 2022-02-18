const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  category: String,
  req_items: {
    item: String,
    quantity: Number,
    weight: String,
    size: String,
    notes: String,
    status: String,
    requester: mongoose.Types.ObjectId,
    runner: mongoose.Types.ObjectId,
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
    requester: mongoose.Types.ObjectId,
    address: String
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  received_rating: {
    requester: mongoose.Types.ObjectId,
    rating: Number
  }
});

module.exports = errandSchema;
