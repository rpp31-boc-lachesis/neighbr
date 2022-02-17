const { Strategy, ExtractJwt } = require('passport-jwt');
const Users = require('../models/users');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.jwtSecret,
  algorithms: ['RS256']
};

module.export = function jwt(passport) {
  passport.use(new Strategy(options, (jwtPayload, done) => {
    Users.findOne({ username: jwtPayload.sub }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      return done(null, user);
    });
  }));
};
