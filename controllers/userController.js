const {
  getPopulatedUser,
  getUsers,
  getOneUser,
  createUser,
  addRunToUser,
  getUserById,
  updateRating
} = require('../db/services/userService');

module.exports = {
  putUpdatedRating: async (req, res) => {
    try {
      await updateRating(req.body.user, req.body.rating);
      if (newRating) {
        res.status(200).send('Updated rating');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getUserPopulate: async (req, res) => {
    console.log('REQ PARAMS:', req.params);
    const { username } = req.params;
    try {
      const userPopulate = await getPopulatedUser(username);
      console.log('USER POPULATE:', userPopulate);
      if (userPopulate) {
        res.status(200).send(userPopulate);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getUsers: async (req, res) => {
    const { page, count } = req.query;
    try {
      const users = await getUsers(page, count);
      if (getUsers) {
        res.status(200).send(users);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getOneUser: async (req, res) => {
    const { username } = req.params;
    try {
      const oneUser = await getOneUser(username);
      if (oneUser) {
        res.status(200).send(oneUser);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  postUser: async (req, res) => {
    // eslint-disable-next-line no-console
    console.log('REQ BODY:', req.body);
    res.status(201).send('Update for real user data!');
    try {
      const newUser = await createUser(username);
      if (newUser) {
        res.status(201).send(`New User ${username} Created!`);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addRunToUser: async (req, res) => {
    try {
      const result = await addRunToUser(req.body.runId, req.body.userId);
      res.status(201).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getUserById: async (req, res) => {
    try {
      const result = await getUserById(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
