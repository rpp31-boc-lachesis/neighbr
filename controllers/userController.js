const {
  getAllUsers,
  getUsers,
  getOneUser,
  createUser,
  addRunToUser,
} = require('../db/services/userService');

module.exports = {
  getAll: async (req, res) => {
    try {
      const allUsers = await getAllUsers();
      if (allUsers) {
        res.status(200).send(allUsers);
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
  }
};
