
const Post  = require("../model/Post");

//showthe create form controller
const showCreateform = (req, res) => {
    res.render("createPost");
  };


//show post list
const showPostList =  async (req, res) => {
    const posts = await Post.find();
    res.render("list", { posts });
  };

  // create post logic

  const createPostLogic =  async (req, res) => {
    const { title, content, author } = req.body;
    await Post.create({
      title,
      content,
      author,
    });
    //redirect to the post list
    res.redirect("/list");
  };


  module.exports = {
    showCreateform,
    showPostList,
    createPostLogic,

  };
