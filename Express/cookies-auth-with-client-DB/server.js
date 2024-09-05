const express = require ('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();

//!connect to mongoose

mongoose.connect('mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/students-database').then(()=>{
    console.log("Mongoose is Connected successfully");
    
}).catch((err)=>{
    console.log(err);
    
});

//!Create the userSchema

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    role:{
        type:String,
        default: 'user',
    }
});

//!compile the schema to form the model
const User = mongoose.model("User", userSchema);

//! middlewares
app.use(express.urlencoded({extended:true}));
//! Set the view engine

app.set('view engine','ejs');
//below code is not required because we are using app.set above
// app.set('views', path.join(__dirname, "views"));

app.use(cookieParser());


//?????>>>>>Custom MIDDLEWARES
const isAuthenticated = (req, res, next) =>{
    //* check the user in the cookie
    const userDataCookie = req.cookie.userData;
    try{
        const userData = userDataCookie && JSON.parse(userDataCookie);
        console.log(userData);
        if(userData && userData.username){
            //*add the login user into the req object
            req.userData = userData
            return next();
        }else{
            res.send('YOU are not logged In');
        }
        
    }catch(error) {
        console.log(error);
        
    }
    
    
};




//HOme Route
app.get('/', (req, res)=>{
    res.render('home');
});
//login route
app.get('/login', (req, res) =>{
    res.render('login');
});


//admin route
app.get('/admin-only',isAuthenticated, (req, res) =>{
    res.render('admin');
});

//rendering Register route
app.get('/register', (req, res) =>{
    res.render('register');
});

//Register route logic
app.post('/register', async (req, res) =>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        username,
        password: hashedPassword,
    });
    //redirect to login
    res.redirect('/login');
});

//login route logic
app.post('/login', async(req, res) =>{
    const {username, password} = req.body;
    
    //* find the user in database
const userFound = await User.findOne({
    username,

})
if(userFound && await bcrypt.compare(password,userFound.password)){
    //* create some cookies(cookies)
      //prepare the login use data 
    //*setting the cookie with the userdata
    res.cookie('userData', JSON.stringify({
        username: userFound.username,
        role: userFound.role,
    }), {
        maxAge: 3 * 24 * 60 * 1000,//3 days expiration
        httpOnly: true,
        secure:false,
        sameSite: 'strict',
    });
    res.redirect("/dashboard");
}else{
    res.send("Invalid login details");
}
});

//dashBord route
app.get('/dashboard', (req, res) =>{

    //?grab the user from the cookie
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData):null;
    
    const username = userData ? userData.username : null
    
    //?render the template
    if(username){
        res.render("dashboard", {username});
    }else{
        //? redirect to login
        res.redirect('/login');
    }

    
});

//logOut route
app.get('/logout', (req, res) =>{
    //* logout
    res.clearCookie('userData');
    //*redirect
    res.redirect('/login');
});


//start the server
app.listen(3000, console.log(`The Server is running`))

