const mongoose = require("mongoose");

//Schema
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", fileSchema);
module.exports = Comment;