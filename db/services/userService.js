// import model for querying db
const { Users } = require('../models/index.js');

// define and export services for request handlers

module.exports = {
  getPopulatedUser: (user) => (
    Users.find({ username: user }, { password: 0, salt: 0 })
      // .lean()
      .populate('run_history')
      .populate('req_history')
  ),
  getUsers: (page, count) => {
    const pageNumber = Number(page) === 1 ? 0 : (page * 20 - 20);
    const countNumber = count > 20 ? 20 : count;
    return Users.find(
      {
        _id:
        { $exists: true }
      },
      { password: 0, salt: 0 }
    ).sort({ _id: 1 }).skip(pageNumber).limit(countNumber);
  },
  getOneUser: (user) => (
    Users.find({ username: user }, { password: 0, salt: 0 })
  ),
  getUserById: (id) => (
    Users.find({ _id: id }, { password: 0, salt: 0 })
  ),
  addRunToUser: (runId, userId) => {
    Users.findOneAndUpdate(
      { _id: userId },
      { $push: { run_history: runId } }
    );
  }
};
