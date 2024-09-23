const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcryptjs");

//Render login page 
exports.getLogin = (req, res) => {
    
    res.render("login",{
        title: "Login",
        error: "",
        user: req.user,
    });
};

//Login logic
exports.login = async (req, res, next) => {
    passport.authenticate("local", (err, user, info)=>{
        if(err){
            return next(err);
        }
        if(!user){
            return res.render("login", {
                title: "Login",
                user: req.user,
                error: info.message,
            });
        }
        req.logIn(user, (err) => {
            if(err){
                return next(err);
            }
            return res.redirect("/");
        });
    })(req, res, next);
};

// register render page
exports.getRegister = (req, res) => {
   
    res.render ("register", {
        title: "Register",
        user: req.user,
        error: "",
    });
    
};

//registering logic

exports.register = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.render('register', {
                title: "Register",
                user: req.user,
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
            user: req.user,
            error: err.message,
        });
    }
};

//Logout
exports.logout = (req, res) => {
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect("/auth/login");
    });
};