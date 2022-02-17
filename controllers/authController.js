const User = require('../db/models/users');
// const config = require('../db/auth/config');

const utils = require('./utils.js');

module.exports = {
  login: (req, res, next) => {
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'could not find user' });
        }
        const isValid = utils.comparePassword(req.body.password, user.hash, user.salt);
        if (isValid) {
          // issue JWT token
          const tokenObj = utils.issueJWT(user);
          res.status(200).json({ token: tokenObj.token, expiresIn: tokenObj.expires });
        } else {
          res.status(401).json({ message: 'You entered the wrong password' });
        }
      })
      .catch((e) => {
        console.error(e);
        next(e);
      });
  },
  signup: async (req, res) => {
    // check if username or email exists
    try {
      const userR = await User.find({
        $or: [
          {
            username: req.body.username
          },
          {
            email: req.body.email
          }
        ]
      });
      console.log(userR.toArray());
    } catch (e) {
      console.error(e);
    }

    if (userR.toArray()) {
      res.json({ success: false, msg: 'This username/email has been registered!' });
    }

    const saltHash = utils.genPassword(req.body.password);
    const { salt, hash } = saltHash.salt;

    const newUser = new User({
      username: req.body.username,
      hash,
      salt
    });

    try {
      newUser.save()
        .then((user) => {
          res.json({ success: true, user });
        });
    } catch (err) {
      res.json({ success: false, msg: err });
    }
    // if (!req.body.username || !req.body.password || !req.body.email) {
    //   res.json({ success: false, msg: 'Please pass username and password.' });
  }
};
