const mongoose = require('mongoose');

const users = mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  email: String,
  password: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  bio: String,
  rating: Number,
  req_history: {
    category: String,
    req_items: {
      item: String,
      quantity: Number,
      weight: String,
      size: String,
      notes: String,
      status: String,
      runner: String
    },
    message: String,
    date: Date,
    pickup: {
      store: String,
      address: String
    },
    dropoff: String,
    given_rating: Number
  },
  run_history: {
    category: String,
    req_items: {
      item: String,
      quantity: Number,
      weight: String,
      size: String,
      notes: String,
      status: String,
      requester: String
    },
    message: {
      requester: String,
      notes: String
    },
    date: Date,
    pickup: {
      store: String,
      address: String
    },
    dropoff: {
      requester: String,
      address: String
    },
    received_rating: {
      requester: String,
      rating: Number
    },
    start_time: Date,
    end_time: Date,
    transportation: String
  }
});

const Users = mongoose.model('Users', users);
// const someUsername = 'Sally';
// Users.create({ username: someUsername });
module.exports = Users;
