const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ("dotenv").config();


//port
const PORT = process.env.PORT || 3000;

//EJS
app.set("view engine", "ejs");
//routes
app.get('/auth/login',(req, res) => {
    res.render("login");
});

app.get('/auth/register',(req, res) => {
    res.render("register");
});

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected successfully");
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(()=>{
    console.log("Database connection failed");
    
})

