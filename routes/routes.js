const routes = require('express').Router();
const users = require('../components/users');
const { postUsers, getUsers } = require('../components/users');

routes.post('/users', postUsers);
routes.get('/users', getUsers);

module.exports = routes;

