// import model for querying db
const { Users } = require('../models/index.js');

// define and export services for request handlers

module.exports = {
  getAllUsers: () => (
    Users.find()
  ),
  getOneUser: (user) => (
    Users.find({ username: user })
  ),
  createUser: (newUser) => (
    Users.create({
      username: newUser
    })
  )
};
