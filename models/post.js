const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new mongoose.Schema({
    post: {
        type: String,
    },
    creator: String,
    // category: {
    //     type: String,
    //     enum: ['endpage1', 'endpage2', 'endpage3']
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);