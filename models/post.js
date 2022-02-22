const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  author: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('post', postSchema)