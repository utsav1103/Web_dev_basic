const express = require('express');

//create instance of express router

// getting all users
const userRouter = express.Router()

userRouter.route ('/').get( (req, res) => {
    res.json({
        message: "welcome tissa..",
    });
});

//! chaning routes for similar path

userRouter.route('/:id').get( (req, res) => {
    res.json({
        message: "All users fetched.. tissa..",
    });
}).put( (req, res) => {
    res.json({
        message: "user updated tissa..",
    });
}).delete( (req, res) => {
    res.json({
        message: "user deleted.. tissa..",
    });
});




module.exports = userRouter;