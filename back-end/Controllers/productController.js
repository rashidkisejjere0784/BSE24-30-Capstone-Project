const Joi = require('joi'); // Import Joi for validation
const mongoose = require('mongoose');
const Product = require('../models/ProductModel');

const addProduct = async (req, res) => {
  try {
    const userRole = req.user.role;

    if (userRole !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    // Ensure the product_image is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Product image is required' });
    }

    // Define the Joi validation schema for the product fields
    const joiSchema = Joi.object({
      name: Joi.string()
        .required()
        .messages({ 'string.empty': 'Name is required' }),
      price: Joi.number().required().messages({
        'number.base': 'Price must be a number',
        'any.required': 'Price is required',
      }),
      categoryId: Joi.string()
        .required()
        .messages({ 'string.empty': 'Category ID is required' }),
      description: Joi.string()
        .required()
        .messages({ 'string.empty': 'Description is required' }),
      discount: Joi.number().default(0).messages({
        'number.base': 'Discount must be a number',
        'any.required': 'Discount is required',
      }),
      availability: Joi.boolean()
        .required()
        .messages({ 'any.required': 'Availability status is required' }),
      quantity: Joi.number().required().messages({
        'number.base': 'Quantity must be a number',
        'any.required': 'Quantity is required',
      }),
      brandId: Joi.string()
        .required()
        .messages({ 'string.empty': 'Brand ID is required' }),
      colors: Joi.array().items(Joi.string().required()).required().messages({
        'array.includesRequiredUnknowns': 'At least one color is required',
      }),
      rating: Joi.array().items(Joi.number().required()).required().messages({
        'array.includesRequiredUnknowns': 'At least one rating is required',
      }),
    });

    // Validate the incoming request body
    const { error, value } = joiSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ errors: error.details.map((e) => e.message) });
    }

    // Extract validated fields
    const {
      name,
      price,
      categoryId,
      description,
      discount,
      availability,
      quantity,
      brandId,
      colors,
      rating,
    } = value;

    // Create a new product object
    const newProduct = {
      name,
      price,
      category_id: new mongoose.Types.ObjectId(categoryId),
      description,
      discount,
      availability,
      quantity,
      brand_id: new mongoose.Types.ObjectId(brandId),
      product_image: req.file.path, // Use the path of the uploaded file
      colors,
      rating,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert the new product into the Product collection
    await Product.collection
      .insertOne(newProduct)
      .then((response) => {
        if (response.acknowledged) {
          return res.status(200).json({
            message: 'Product added successfully',
            userId: response.insertedId,
          });
        }
        return res.status(400).json({ message: 'Error Adding New product' });
      })
      .catch((err) => {
        throw new Error('Failed to sign up user');
      });
  } catch (error) {
    // Handle any server errors
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addProduct,
};
