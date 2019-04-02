const express = require('express');
const bcrypt = require('bcrypt');

const Users = require('../users/model');
const generateToken = require('./generateToken').generateToken;

const router = express.Router();

router.post('/register', (req, res) => {
  const user = req.body;

  user.password = bcrypt.hashSync(user.password, 8);

  Users.insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.getByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: 'logged out' });
      }
    });
  }
});
module.exports = router;
