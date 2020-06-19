const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const danaPostSchema = new mongoose.Schema({
    post: {
        type: String,
    },
    author: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model('DanaPost', danaPostSchema);