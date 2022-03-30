const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    _id: {},
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    country: String,
    preferences: []
    
})

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;