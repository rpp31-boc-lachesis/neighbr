const { getAllUsers, getOneUser, createUser } = require('../db/services/userService');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const getUsers = await getAllUsers();
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
      const oneUser = await getOneUser(username);
      if (oneUser) {
        res.status(200).send(oneUser);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  postUser: async (req, res) => {
    console.log('REQ BODY:', JSON.stringify(req.body.data.results));
    res.status(201).send('New User Created!');
    try {
      const newUser = await createUser(username);
      if (newUser) {
        res.status(201).send(`New User ${username} Created!`);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
