const User = require("../models/User");



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
};