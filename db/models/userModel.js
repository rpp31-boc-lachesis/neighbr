const mongoose = require('mongoose');

const { Schema } = mongoose;

const users = Schema({
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
  avatar_url: {
    type: String
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
  country: {
    type: String
  },
  coordinates: {
    lat: {
      type: String
    },
    long: {
      type: String
    }
  },
  bio: {
    type: String
  },
  rating: Number,
  rated_times: Number,
  created_at: Date,
  req_history: [{ type: mongoose.Types.ObjectId, ref: 'Errands' }],
  run_history: [{ type: mongoose.Types.ObjectId, ref: 'Runs' }],
  // req_history: {
  //   category: String,
  //   req_items: {
  //     item: String,
  //     quantity: Number,
  //     weight: String,
  //     size: String,
  //     notes: String,
  //     status: String,
  //     runner: String
  //   },
  //   message: String,
  //   date: Date,
  //   pickup: {
  //     store: String,
  //     address: String
  //   },
  //   dropoff: String,
  //   given_rating: Number
  // },
  // run_history: {
  //   category: String,
  //   req_items: {
  //     item: String,
  //     quantity: Number,
  //     weight: String,
  //     size: String,
  //     notes: String,
  //     status: String,
  //     requester: String
  //   },
  //   message: {
  //     requester: String,
  //     notes: String
  //   },
  //   date: Date,
  //   pickup: {
  //     store: String,
  //     address: String
  //   },
  //   dropoff: {
  //     requester: String,
  //     address: String
  //   },
  //   received_rating: {
  //     requester: String,
  //     rating: Number
  //   },
  //   start_time: Date,
  //   end_time: Date,
  //   transportation: String
  // }

});

const Users = mongoose.model('Users', users);
// const someUsername = 'Sally';
// Users.create({ username: someUsername });
module.exports = Users;
