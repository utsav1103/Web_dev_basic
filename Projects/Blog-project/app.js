const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ("dotenv").config();
const User = require("./models/User");


//port
const PORT = process.env.PORT || 3000;

//middlewares: passing form data
app.use(express.urlencoded({extended: true}));

//EJS
app.set("view engine", "ejs");


//routes
app.get('/auth/login',(req, res) => {
    res.render("login");
});

app.get('/auth/register',(req, res) => {
   
    res.render ("register");
    
});

app.post('/auth/register', async (req, res) => {
    const {username, email, password} = req.body;
    try{
        //check if user exists
        const user = await User.findOne({email});
        if(user){
            res.send("user already exists");
        }else{
            //create new user
            const newUser = new  User({
                username,
                email,
                password,
            });
            await newUser.save();
            //redirect to login
            res.redirect("/auth/login");
        }
        

    }catch(err){
        res.send(err);
        
    }
});

//* main logic for user registartion



mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected successfully");
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(()=>{
    console.log("Database connection failed");
    
})

