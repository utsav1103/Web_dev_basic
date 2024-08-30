const express = require("express");

const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;

//Instance of express
const app = express();
const URL =
  "mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/students-database";
//connect to mongodb

const connectTodb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(`Error connecting to Mongodb ${error}`);
  }
};
//call function
connectTodb();

//! design schema

//!  comments schema

const commentsSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);
//? compile the comment schema to form model

const Comment = mongoose.model("Comment", commentsSchema);

//!  BlogPost schema here
const BlogSchema = new mongoose.Schema(
  {
    title: String,
    Comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    
  },
  { timestamps: true }
);


//? compile the schema
const Post = mongoose.model("Post", BlogSchema);

//! create post

// const createPost = async () => {
//   try{
//     //create post
//     const newDoc = await Post.create({
//       title: "MIKASA is magnificent",
//     });
//     console.log(newDoc);
//   }catch(error){
//     console.log(error);
    
//   }
// };

// createPost();

//! create the comments here
const createComment = async () => {
  try{
    //* find the post you want to comment
    const postFound = await Post.findById('66d15e0558139e43a7d73694');
    console.log(postFound);
    
    //* create the comment

    const newComment = await Comment.create({text:"Awesome post Tissa..."});
    console.log(newComment);
    
    //* push the comment into the post
    postFound.Comments.push(newComment._id)

    //* resave the post
    await postFound.save();
  }catch(error){
    console.log(error);
    
  }
};
createComment();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
