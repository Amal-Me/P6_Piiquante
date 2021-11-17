const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const sauceSchema = mongoose.Schema({
    userId : { type: String, required: true},
    name: { type: String, required: true},
    manufacturer: { type: String},
    description: { type: String},
    mainPepper: { type: String},
    imageUrl: { type: String},
    heat: { type: Number},
    likes: { type: Number},
    dislikes: { type: Number},
    usersLiked: { type: Array},
    usersDisliked: { type: Array}
});

// sauceSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Sauce', sauceSchema);
