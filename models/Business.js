const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const UserSchema = new Schema({
    shopname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        minlength: 6,
        maxlength: 12
    },
    storepic: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required:true
    },
    place: {
        type: String
    }

});

module.exports = User = mongoose.model('users', UserSchema);
