const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");
const File = require("../models/File");

//Rendering post form
exports.getPostForm = asyncHandler((req, res) => {
    res.render("newPost", {
        title: "Create Post",
        user: req.user,
        error: "",
        success: "",
    });
});


//creating of the post
exports.createPost = asyncHandler(async (req, res)=> {
    const {title, content} = req.body;
    //validation
    // if(!req.files || req.files.length === 0){
    //     return res.render("newPost", {
    //         title: "Create Post",
    //         user: req.user,
    //         error: "At least one image is required",
    //         success: "",
    //     });
    // }
    const images = await Promise.all(req.files.map(async(file)=>{
        //save the images into our database
        const newFile = new File({
            url: file.path,
            public_id: file.filename,
            uploaded_by: req.user._id,
        });
        await newFile.save();
        console.log(newFile);
        
        return{
            url: newFile.url,
            public_id: newFile.public_id,
        };
    }));

    //create post
    const newPost = new Post({
        title,
        content,
        author: req.user._id,
        images,
    });
    await newPost.save();
    res.render("newPost", {
        title: "Create Post",
        user: req.user,
        success: "post created successfully",
        error: "",
    });

});

//Get all posts
exports.getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate("author", "username");
    res.render("posts", {
        title: "Posts",
        posts,
        user: req.user,
        success: "",
        error: "",
    });
});