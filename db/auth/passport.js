const JWT = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const PUB_KEY = fs.readFileSync(path.join(__dirname, '../..', 'controllers/signature/pub_key.pem'), 'utf8');

function authMiddleware(req, res, next) {
  console.log('ACCESSING STRICTED ROUTES :::: hitting middleware');

  if (req.cookies.token !== undefined) {
    const token = req.cookies.token.split(' ');
    if (token[0] === 'Bearer' && token[1].match(/\S+\.\S+\.\S+/) !== null) {
      try {
        const verification = JWT.verify(token[1], PUB_KEY, { algorithms: ['RS256'] });
        req.user_id = verification.sub;
        next();
      } catch (err) {
        res.redirect('/login');
      }
    }
  } else {
    res.redirect('/');
  }
}
module.exports.authMiddleware = authMiddleware;
