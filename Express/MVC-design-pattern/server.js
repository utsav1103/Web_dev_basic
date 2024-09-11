const express = require("express");


const app = express();
//-----Connect DB------
const mongoose = require("mongoose");
const postRouter = require("./routes/postRouter");
mongoose
  .connect("mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/mvc-design-pattern")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });
const PORT = 3000;
//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(express.urlencoded({ extended: true }));



//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});

//! show router
app.use("/", postRouter);

//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));