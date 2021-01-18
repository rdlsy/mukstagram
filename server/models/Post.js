const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String,
  },
  privacy: {
    type: Number,
  },
  filePath : {
    type: String,
  },
  views : {
    type: Number,
    default: 0 
  },
  duration :{
    type: String
  },
  thumbnail: {
    type: String
  },
  type: {
    type: String
  }
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post }