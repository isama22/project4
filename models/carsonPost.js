const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const carsonPostSchema = new mongoose.Schema({
    post: {
        type: String,
    },
    creator: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model('CarsonPost', carsonPostSchema);