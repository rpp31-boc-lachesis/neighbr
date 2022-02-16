const mongoose = require('mongoose');
const dayjs = require('dayjs');

const { Schema } = mongoose;

// const userId = Schema.ObjectId;

const userSchema = Schema(
  {
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
