const express = require("express");

const userRouter = require("./routes/usersRouter");
const postRouter = require("./routes/postRouter");
const isAuthenticated = require("./middleware/isAuthenticated");
const app = express();

const PORT = 5000;

//home route
app.get('/', (req, res )=> {
    res.json({
        message: "Welcome tissa.. ,to the main app"
    })
});

//!>>> using user router

app.use('/users',isAuthenticated, userRouter);
app.use('/posts', postRouter);



//*start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));