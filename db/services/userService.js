// import model for querying db
const { Users } = require('../models/index.js');

// define and export services for request handlers

module.exports = {
  getPopulatedUser: (user) => (
    Users.findOne({ username: user })
      .populate('req_history')
      .populate('run_history')
  ),
  getUsers: (page, count) => {
    const pageNumber = Number(page) === 1 ? 0 : (page * 20 - 20);
    const countNumber = count > 20 ? 20 : count;
    return Users.find().sort({ _id: 1 }).skip(pageNumber).limit(countNumber);
  },
  getOneUser: (user) => (
    Users.find({ username: user })
  ),
  getUserById: (id) => (
    Users.find({ _id: id })
  ),
  addRunToUser: (runId, userId) => {
    Users.findOneAndUpdate(
      { _id: userId },
      { $push: { run_history: runId } }
    );
  }
};
