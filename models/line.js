const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lineSchema = new Schema({
  text: {
    type: String,
    required: true
},
  user: {
  type: Schema.Types.ObjectId,
  ref: "User"
},
  timestamps: true,
});

const Line = mongoose.model('Line', lineSchema);

module.exports = Post;