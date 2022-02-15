// import model for querying db
const Users = require('../models/userModel');
const { Schema } = require('mongoose');

// define and export services for request handlers

module.exports = {
  getAllUsers: () => (
    Users.find()
  ),
  getOneUser: (oneUsername) => (
    Users.find({ username: oneUsername })
  ),
  createUser: (newUserParams) => (
    Users.create({
      id: Schema.ObjectId,
      first_name: userData.results[0].name.first,
      last_name: userData.results[0].name.last,
      username: userData.results[0].login.username,
      email: userData.results[0].email,
      password: userData.results[0].login.password,
      avatar_url: userData.results[0].picture.large,
      street_address: `${userData.results[0].location.street.number} ${userData.results[0].location.street.name}`,
      city: userData.results[0].location.city,
      state: userData.results[0].location.state,
      zip: userData.results[0].location.postcode,
      country: userData.results[0].location.street.country,
      coordinates: {
        lat: userData.results[0].location.coordinates.latitude,
        long: userData.results[0].location.coordinates.longitude
      },
      bio: 'Hey this is a user!',
      rating: 0,
      created_at: new Date(),
      req_history: [
        {
          id: Schema.ObjectId,
          category: '',
          item: '',
          quantity: 0,
          weight: '',
          size: '',
          notes: '',
          status: '',
          runner: '',
          date: '',
          pickup: {
            coordinates: {
              lat: '',
              long: ''
            }
          },
          dropoff: {
            coordinates: {
              lat: '',
              long: ''
            }
          }
        }
      ],
      run_history: [
        {
          id: Schema.ObjectId,
          category: '',
          item: '',
          quantity: 0,
          weight: '',
          size: '',
          notes: '',
          status: '',
          runner: '',
          date: '',
          pickup: {
            coordinates: {
              lat: '',
              long: ''
            }
          },
          dropoff: {
            coordinates: {
              lat: '',
              long: ''
            }
          }
        }
      ]
    })
  )
};
