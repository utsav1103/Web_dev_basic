const express = require("express");
const { getPostForm, createPost, getPosts, getPostById } = require("../controllers/postControllers");
const { post } = require("./authRoutes");
const upload = require("../config/multer");
const { ensureAuthenticated } = require("../middlewares/auth");
const postRoutes = express.Router();

//get post form
postRoutes.get("/add", getPostForm);

//post logic
postRoutes.post('/add',ensureAuthenticated,upload.array("images", 5), createPost);

//get all posts
postRoutes.get("/", getPosts);

//get post by id 
postRoutes.get ("/:id", getPostById);


module.exports = postRoutes;