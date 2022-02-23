const mongoose = require('mongoose');

const { Schema } = mongoose;

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
        type: Schema.Types.ObjectId,
        ref: 'Errand'
      }
    ],
    run_history: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Run'
      }
    ],
  }
  // { collection: 'users' }
);

module.exports = userSchema;
