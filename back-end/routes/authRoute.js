const express = require('express');
const AuthController = require('../Controllers/authController')
const route = express.Router();

route.get('/auth/signin', AuthController.SignIn)

module.exports = route;