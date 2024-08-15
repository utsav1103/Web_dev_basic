const { name } = require("ejs");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
// Serve the static files/folder

app.use(express.static(path.join(__dirname, "public")));
//* set the view engin to ejs

app.set("view engine", "ejs");

//?Render home page/route
app.get("/", (req, res) => {
  res.render("home");
});

//?Render about page/route
app.get("/about", (req, res) => {
  res.render("about");
});

//?Render contact page/route
app.get("/contact", (req, res) => {
  res.render("contact");
});

//?Render gallery page/route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

//? render user data
app.get("/user", (req, res) => {
  //dummy user content
  const userData = {
    username: "Tissa",
    age: 20,
    isPremiumUser: true,
    email: "exm@gmail.com",
    isLogin: true,
  };
  res.render("userData", userData);
});
//?Render Product page/route
app.get("/products", (req, res) => {
  const products = [
    {name: "laptop",price: 999},
    {name: "phone", price: 500},
    {name: "Tv", price: 800},
  ];
  res.render("products", {products});
});

//! start the server
app.listen(PORT, console.log(`SERver is running on port ${PORT} , Tissa..`));
