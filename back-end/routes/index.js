const express = require('express');
const authRouter = require('./authRoute.js');
const productRouter = require('./productRoute.js');

const router = express.Router();

router.use(authRouter);
router.use(productRouter);

module.exports = router;
