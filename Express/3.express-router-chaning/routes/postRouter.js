const express = require("express");

const postRouter = express.Router();

postRouter.get('/', (req, res) => {
    res.json({
        message: "All Posts done tissa.."
    });
});

module.exports = postRouter;