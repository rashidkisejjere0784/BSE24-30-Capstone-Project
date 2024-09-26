const express = require('express')
const ProductController = require('../Controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')

const route = express.Router()

route.post('/product/add', authMiddleware, ProductController.addProduct)

module.exports = route
