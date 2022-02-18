const { Strategy, ExtractJwt } = require('passport-jwt');
const fs = require('fs');
const path = require('path');
const Users = require('../models/users');

const PUB_KEY = fs.readFileSync(path.join(__dirname, '../..', 'controllers/signature/pub_key.pem'));

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

module.exports = (passport) => {
  passport.use(new Strategy(options, (jwtPayload, done) => {
    Users.findOne({ _id: jwtPayload.sub }, (err, user) => {
      console.log(jwt_payload)
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  }));
};
