const jwt = require('jsonwebtoken');
const secret = require('../config/secrets').jwtSecret;

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
};

module.exports = {
  generateToken
};
