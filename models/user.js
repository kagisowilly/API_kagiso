const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: null
  },
  about: {
    type: String,
    required: false,
    default: null
  }
})

module.exports = mongoose.model('user', userSchema)