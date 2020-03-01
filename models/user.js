const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase() === value || value.toUpperCase() === value) {
                throw new Error('Password must contain 1 lower and 1 upper case letter')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email must be valid')
            }
        }
    }
});

userSchema.pre('save', async function (next) {
    console.log('working middleware')

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;