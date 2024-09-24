const express = require("express");
const { getPostForm, createPost } = require("../controllers/postControllers");
const { post } = require("./authRoutes");
const upload = require("../config/multer");
const postRoutes = express.Router();

//get post form
postRoutes.get("/add", getPostForm);

//post logic
postRoutes.post('/add',upload.array("images", 5), createPost);

module.exports = postRoutes;