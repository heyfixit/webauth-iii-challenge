const express = require('express');

const restricted = require('../auth/restricted');
const configureMiddleware = require('./middleware');

const authController = require('../auth/controller');
const usersController = require('../users/controller');
const server = express();

configureMiddleware(server);
server.use('/api/restricted/*', restricted);
server.use('/api/auth', authController);
server.use('/api/restricted/users', usersController);
server.use('/', (_req, res) => res.send('API up and running'));

module.exports = server;
