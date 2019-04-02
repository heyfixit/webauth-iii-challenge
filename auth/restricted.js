const jwt = require('jsonwebtoken');
const secret = require('./generateToken').secret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // token is invalid, may be tampered with, or expired
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
