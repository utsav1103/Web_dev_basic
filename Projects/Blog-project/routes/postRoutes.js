const express = require("express");
const { getPostForm, createPost } = require("../controllers/postControllers");
const { post } = require("./authRoutes");
const postRoutes = express.Router();

//get post form
postRoutes.get("/add", getPostForm);

//post logic
postRoutes.post('/add', createPost);

module.exports = postRoutes;