const express = require('express');

const { showCreateform, showPostList, createPostLogic } = require('../controller/postController');



//Router
const postRouter = express.Router();


//! Show the create form
postRouter.get("/create", showCreateform);
  //! To get all posts
  postRouter.get("/list", showPostList);
  //! Create the post (The main logic)
  postRouter.post("/create",createPostLogic);

  module.exports = postRouter;