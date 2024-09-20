const User = require("../models/User");

const bcrypt = require("bcryptjs");

//Render login page 
exports.getLogin = (req, res) => {
    res.render("login");
};

//Login logic
exports.login = async (req, res) => {
    const {email,password} = req.body;
    try{
        //find user
        const user = await User.findOne({email});
        const isMatch = await User.findOne({password});
        if(user && isMatch){
            res.send ("login success");
        }else{
            res.send ("login failed");
        }

    }catch(error){
        res.send(error);
    }
};

// register render page
exports.getRegister = (req, res) => {
   
    res.render ("register");
    
};

//registering logic

exports.register = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.render('register', {
                title: "Register",
                user: req.username,
                error: "user already exists",
            });
        }//hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //save user
        const user = await User.create({
            username,
            email,
            password: hashedPassword,  
        });

    }catch(err){
       
        res.render("register", {
            title: "Register",
            user: req.username,
            error: err.message,
        });
    }
};