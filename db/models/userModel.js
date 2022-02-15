const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// const userId = Schema.ObjectId;

const userSchema = mongoose.Schema(
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
    rating: Number,
    created_at: Date,
    req_history: [
      {
        id: Schema.ObjectId,
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
            lat: {
              type: String
            },
            long: {
              type: String
            }
          }
        },
        dropoff: {
          coordinates: {
            lat: {
              type: String
            },
            long: {
              type: String
            }
          }
        }
      }
    ],
    run_history: [
      {
        id: Schema.ObjectId,
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
            lat: {
              type: String
            },
            long: {
              type: String
            }
          }
        },
        dropoff: {
          coordinates: {
            lat: {
              type: String
            },
            long: {
              type: String
            }
          }
        }
      }
    ]
  },
  { collection: 'users' }
);

const Users = mongoose.model('User', userSchema);

const userData = {
  results: [{
    gender: 'male',
    name: { title: 'Mr', first: 'Douglas', last: 'Bishop' },
    location: {
      street: { number: 8272, name: 'College St' }, city: 'Thornton', state: 'Kentucky', country: 'United States', postcode: 69446, coordinates: { latitude: '-67.5044', longitude: '-83.6678' }, timezone: { offset: '+5:00', description: 'Ekaterinburg, Islamabad, Karachi, Tashkent' }
    },
    email: 'douglas.bishop@example.com',
    login: {
      uuid: '41ad1e5a-3c52-4e04-aeff-e8c0f5309a41', username: 'yellowzebra898', password: 'tucson', salt: 'nXuj4arA', md5: 'b5d5d756882a08e91a4424f67e08d457', sha1: 'f2d8c2b5a2f74a8af00bb6b117dfc8eb56057181', sha256: 'd20ca8dfdb8988d942b6ba354a1351c17199127f4def64185ccfdc3f1f6031e8'
    },
    dob: { date: '1972-03-20T07:20:14.221Z', age: 50 },
    registered: { date: '2016-06-03T17:02:13.254Z', age: 6 },
    phone: '(932)-066-2007',
    cell: '(168)-928-3017',
    id: { name: 'SSN', value: '057-16-4272' },
    picture: { large: 'https://randomuser.me/api/portraits/men/6.jpg', medium: 'https://randomuser.me/api/portraits/med/men/6.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg' },
    nat: 'US'
  }],
  info: {
    seed: 'e9dab8f9bb7e7cf3', results: 1, page: 1, version: '1.3'
  }
};

Users.create({
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
      id: mongoose.Types.ObjectId().toString(),
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
      id: mongoose.Types.ObjectId().toString(),
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
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Users;
