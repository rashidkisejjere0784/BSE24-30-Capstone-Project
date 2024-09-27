const express = require('express');
const authRouter = require('./authRoute.js');
const productRouter = require('./productRoute.js');
const brandRouter = require('./brandRoute.js');
const categoryRouter = require('./categoryRoute.js');

const router = express.Router();

router.use(authRouter);
router.use(productRouter);
router.use(brandRouter);
router.use(categoryRouter);

module.exports = router;
