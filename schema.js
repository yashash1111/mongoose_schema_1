const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['user']
    },
    profile: {
        firstName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        age: {
            type: Number,
            required: false
        }
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, {
    timestamps: true 
});

const User = mongoose.model('User', userSchema);
module.exports = User;
