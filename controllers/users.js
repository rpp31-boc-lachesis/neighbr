// const services = require('../db/services/users');

module.exports = {
  getUser: (req, res) => {
    res.status(200).send('Some User Data!');
  },

  postUser: async (req, res) => {
    res.status(201).send('New User Created!');
    // const newUsername = req.body.username;
    // try {
    //   let createUser = await services.createUser(newUsername);
    //   res.status(201).send('New User Created!');
    // } catch (err) {
    //   res.status(500).send(err);
    // }
  }
};
