const mongoose = require('mongoose');

const users = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
    required: true
  },
  first_name: {
    type: String,
    index: true,
    required: true
  },
  last_name: {
    type: String,
    index: true,
    required: true
  },
  username: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    index: true,
    required: true
  },
  street_address: {
    type: String,
    index: true,
    required: true
  },
  city: {
    type: String,
    index: true,
    required: true
  },
  state: {
    type: String,
    index: true,
    required: true
  },
  zip: {
    type: String,
    index: true,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  rating: Number,
  req_history: [
    {
      category: String,
      item: String,
      quantity: Number,
      weight: String,
      size: String,
      notes: String,
      status: String,
      runner: String,
      date: Date,
      pickup: {
        coordinates: {
          lat: String,
          lng: String
        }
      },
      dropoff: {
        coordinates: {
          lat: String,
          lng: String
        }
      }
    }
  ],
  run_history: [
    {
      category: String,
      item: String,
      quantity: Number,
      weight: String,
      size: String,
      notes: String,
      status: String,
      runner: String,
      date: Date,
      pickup: {
        coordinates: {
          lat: String,
          lng: String
        }
      },
      dropoff: {
        coordinates: {
          lat: String,
          lng: String
        }
      }
    }
  ]
});

const Users = mongoose.model('User', users);
// const someUsername = 'Tom';
// Users.create({ username: someUsername });
module.exports = Users;
