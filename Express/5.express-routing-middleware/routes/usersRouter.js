const express = require('express');

//create instance of express router
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.json({
        message: "welcome tissa..",
    });
});


userRouter.get('/:id', (req, res)=>{
    res.json({
        message: "user fetched",
    });
})


userRouter.put("/:id", (req, res) => {
    res.json({
        message: "user updated",
    });
});

userRouter.delete('/:id', (req, res)=>{
    res.json({
        message: "user deleted",
    });
});


module.exports = userRouter;