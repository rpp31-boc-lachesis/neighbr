// import model for querying db
const { Users } = require('../models/index.js');

// define and export services for request handlers

module.exports = {
  updateRating: (user, givenRating) => {
    const calculateSumRating = (currentSum, ratingCount) => {
      const newSum = ((currentSum * ratingCount) + givenRating) / ratingCount + 1;

      return Math.round((newSum + Number.EPSILON) * 100) / 100;
    };

    return Users.findOneAndUpdate(
      { username: user },
      {
        $set:
          { sum_rating: calculateSumRating(sum_rating, rating_count) },
        $inc: { rating_count: 1 }
      },
      { new: true }
    );
  },
  getPopulatedUser: (user) => (
    Users.find({ username: user }, { password: 0, salt: 0 })
      // .lean()
      .populate({ path: 'run_history', populate: { path: 'location' } })
      .populate({ path: 'req_history', populate: { path: 'pickup.locationId' } })
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
