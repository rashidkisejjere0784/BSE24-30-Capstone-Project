const UserModel = require('../models/UserModel');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const User = new UserModel();

const SignUp = async (req, res) => {
    try {
        const joiSchema = Joi.object({
            name: Joi.string()
                .required()
                .messages({
                    'string.empty': 'Name is required',
                }),
            
            email: Joi.string()
                .email()
                .required()
                .messages({
                    'string.email': 'Please provide a valid email address',
                    'any.required': 'Email is required'
                }),
            
            password: Joi.string()
                .min(8)
                .required()
                .messages({
                    'string.min': 'Password must be at least 8 characters long',
                    'string.empty': 'Password is required',
                    'any.required': 'Password is required'
                }),
            
            role: Joi.string()
                .valid('user', 'admin', 'moderator')  // Include 'moderator' here
                .default('user')
                .messages({
                    'any.only': 'Role must be one of [user, admin, moderator]'  // Updated to match validation
                }),
            
            confirm_email_token: Joi.string()
                .optional()
                .default('')
                .allow(null, ''),
            
            reset_token: Joi.string()
                .optional()
                .default('')
                .allow(null, ''),
            
            profileImg: Joi.string()
                .uri()
                .optional()
                .allow(null, '')
                .default('')
                .messages({
                    'string.uri': 'Profile image must be a valid URL'
                })
        });
        
        const { error, value } = joiSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Check if the user already exists in the database by email (adjust this according to your DB logic)
        const existingUser = await User.collection.findOne({ email: value.email });
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use.' });
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(value.password, 10); // 10 is the salt rounds

        const result = User.collection.insertOne({
            name: value.name,
            email: value.email,
            password: hashedPassword,
            role: value.role,
            profileImg: value.profileImg || null
        })

        if (result.acknowledged) {
            return res.status(200).json({ message: 'New user created successfully', userId: result.insertedId });
        } else {
            return res.status(400).json({ message: 'Error creating new user' });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    SignUp
}
