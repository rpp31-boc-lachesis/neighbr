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
    requester: { type: Schema.Types.ObjectId, ref: 'User' },
    runner: { type: Schema.Types.ObjectId, ref: 'User' },
    transportation: String
  },
  message: {
    requester: { type: Schema.Types.ObjectId, ref: 'User' },
    notes: String
  },
  pickup: {
    store: String,
    address: String
  },
  dropoff: {
    requester: { type: Schema.Types.ObjectId, ref: 'User' },
    address: String
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  received_rating: {
    requester: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: Number
  }
});

// const Errand = mongoose.model('Errand', errandSchema);
module.exports = errandSchema;
