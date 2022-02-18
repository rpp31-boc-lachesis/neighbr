// import model for querying db
const Users = require('../models/users.js');

// define and export services for request handlers

module.exports = {
  getAllUsers: () => (
    Users.find().sort({ id: 1 })
  ),
  getUsers: (page, count) => {
    const pageNumber = Number(page) === 1 ? 0 : (page * 20 - 20);
    const countNumber = count > 20 ? 20 : count;
    return Users.find().sort({ _id: 1 }).skip(pageNumber).limit(countNumber);
  },
  getOneUser: (user) => (
    Users.find({ username: user })
  ),
  createUser: (newUser) => (
    Users.create({
      username: newUser
    })
  )
};
