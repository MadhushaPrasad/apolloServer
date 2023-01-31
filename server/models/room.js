const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  topic: String,
  name: String,
  lang: String,
  capacity: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },

  conversation: [
    {
      user: String,
      text: String,
    },
  ],
  roomUser: [
    {
      userId: String,
      name: String,
      img: String,
    },
  ],
});

const Post = mongoose.model("Room", roomSchema);

module.exports = Post;
