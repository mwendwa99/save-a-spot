var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define user schema for database
const userSchema = new Schema({
    plate: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
}, { timestamps: true });

// pluralize the User and find 'users' collection in the database
// user model
const User = mongoose.model('User', userSchema);
module.exports = User;