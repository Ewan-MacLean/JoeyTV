const mongoose = require('mongoose');

const userCommentsSchema = new mongoose.Schema({
    _id: {},
    showId: Number,
    userId: Number,
    userComment: String,
    userRating: Number
    
})

const UserComments = mongoose.model('UserComments', userCommentsSchema);

module.exports = UserComments;