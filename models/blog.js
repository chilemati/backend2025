const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: [true,'Please provide a blog title'],
  },
  body: {
    type: String,
    required: [true,'Please provide a blog content'],
  },
 
},{timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;