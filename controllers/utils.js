const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');

module.exports = {
  issueJWT: (user) => {
    const { _id } = user;
    const expiresIn = '1d';
    const payload = {
      sub: _id,
      iat: Date.now()
    };

    const signedToken = jsonwebtoken.sign(payload, process.env.jwtSecret, { expiresIn, algorithm: 'RS256' });
    return {
      token: `Bearer ${signedToken}`,
      expires: expiresIn
    };
  },
  comparePassword: (password, hash, salt) => {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
  },
  genPassword: (password) => {
    // TO DO
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return {
      salt,
      hash: genHash
    };
  }
};
