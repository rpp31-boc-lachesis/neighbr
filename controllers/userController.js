const services = require('../db/services/userService');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const getUsers = await services.getAllUsers();
      if (getUsers) {
        res.status(200).send(getUsers);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getOneUser: async (req, res) => {
    const { username } = req.params;
    try {
      const oneUser = await services.getOneUser(username);
      if (oneUser) {
        res.status(200).send(oneUser);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  postUser: async (req, res) => {
    const { username } = req.body;
    try {
      const createUser = await services.createUser(username);
      if (createUser) {
        res.status(201).send(`New User ${username} Created!`);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
