const express = require('express');
const authRouter = require('./authRoute.js');

const router = express.Router();

router.use(authRouter);

module.exports = router;
