const express = require('express');
const AuthController = require('../Controllers/authController');

const route = express.Router();

route.post('/auth/signup', AuthController.SignUp);

module.exports = route;
