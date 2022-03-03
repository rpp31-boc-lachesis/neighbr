// import model for querying db
const { Users } = require('../models/index.js');

// define and export services for request handlers

module.exports = {
  updateRating: (user, givenRating) => {
    const calculateSumRating = (currentSum, ratingCount) => {
      const newSum = ((currentSum * ratingCount) + givenRating) / ratingCount + 1;

      return Math.round((newSum + Number.EPSILON) * 100) / 100;
    };

    Users.findOneAndUpdate(
      { username: user },
      { $set: { sum_rating: calculateSumRating() }, $inc: { rating_count: 1 } },
      { new: true }
    );
  },
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
