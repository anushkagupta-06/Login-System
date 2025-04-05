const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/LoginSignUp');


const userData = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user", userData);