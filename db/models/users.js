const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = Schema(
  {
    first_name: {
      type: String,
      index: true,
      required: false
    },
    last_name: {
      type: String,
      index: true,
      required: false
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
    hash: {
      type: String,
      index: true,
      required: true
    },
    salt: {
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
      required: false
    },
    city: {
      type: String,
      index: true,
      required: false
    },
    state: {
      type: String,
      index: true,
      required: false
    },
    zip: {
      type: String,
      index: true,
      required: false
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
    dob: String,
    age: Number,
    sum_rating: Number,
    rating_count: Number,
    created_at: String,
    req_history: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Errands'
      }
    ],
    run_history: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Runs'
      }
    ],
  },
  { collection: 'users' }
);

const Users = mongoose.model('User', userSchema);

module.exports = Users;