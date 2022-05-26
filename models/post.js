const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const ItemSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  department: {
      type: String
  },
  purchased: {
      type: Boolean,
      default: false
  },
  date: {
      type: Date,
      default: Date.now
  }
})






// A post has many likes, a like belongs to a POST
const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    caption: String,
    likes: [likesSchema], // embedded schema
    items: [ItemSchema]
  })


 

module.exports = mongoose.model('Post', postSchema);