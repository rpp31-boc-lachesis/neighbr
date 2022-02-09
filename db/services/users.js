// import model for querying db
const Users = require('../models/users');

// define and export services for request handlers

module.exports = {
  createUser: (newUsername) => {
    Users.create({
      username: newUsername
    });
  },
};
