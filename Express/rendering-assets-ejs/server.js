const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;
// Serve the static files/folder

app.use(express.static(path.join(__dirname, 'public')));
//* set the view engin to ejs

app.set('view engine', 'ejs');

//?Render home page/route
app.get('/', (req, res) => {
   res.render("home.ejs");
});

//?Render about page/route
app.get('/about', (req, res) => {
    res.render("about.ejs");
});

//?Render contact page/route
app.get('/contact', (req, res) => {
    res.render("contact.ejs");
});

//?Render gallery page/route
app.get('/gallery', (req, res) => {
    res.render("gallery.ejs");
});

//? render user data
app.get('/user', (req, res) =>{
    //dummy user content
    const userData = {
        username: "Tissa",
        age: 20,
        isPremiumUser: true,
        email: "exm@gmail.com",
        isLogin: true,
    };
    res.render("userData.ejs", userData );
});






//! start the server
app.listen(PORT, console.log(`SERver is running on port ${PORT} , Tissa..`)
);