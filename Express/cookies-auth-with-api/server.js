const express = require ('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const exp = require('constants');
const app = express();


//! middlewares
app.use(express.json());

app.use(cookieParser());


//? simulated database of users
const users = [{
    username: 'Eren', password: '123', role:'CEO'
},
{username: 'Mikasa', password: '123', role:'HR'},];

//HOme Route
app.get('/', (req, res)=>{
    res.json({message: 'Welcome to the API'});
});


//login route logic
app.post('/login', (req, res) =>{
    console.log(req.body);
    
    //* find the user login details
    const userFound = users.find((user)=>{
        const {username, password} = req.body
        return user.username === username && user.password === password
    })
    console.log(userFound);
    
    //* create some cookies(cookies)
      //prepare the login use data 
    //*setting the cookie with the userdata
    res.cookie('userData', JSON.stringify(userFound), {
        maxAge: 3 * 24 * 60 * 1000,//3 days expiration
        httpOnly: true,
        secure:false,
        sameSite: 'strict',
    })
    //*render the user dashboard

    if( userFound){
        res.json({message: 'Login Success',})
    }else{
        res.json({
            message:"Login failed ....",
        })
    }
});

//dashBord route
app.get('/dashboard', (req, res) =>{

    //?grab the user from the cookie
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData):null;
    
    const username = userData ? userData.username : null
    
    //?render the template
    if(username){
       res.json({
        message:`Welcome ${username}, role: ${userData.role}`,
       })
    }else{
        //? redirect to login
        res.json({
            message: `Unauthorized please login first`,
        });
    }

});

//logOut route
app.get('/logout', (req, res) =>{
    //* logout
    res.clearCookie('userData');
    //*redirect
    res.json({
        message: 'logged out successfull'
    });
});


//start the server
app.listen(3000, console.log(`The Server is running`))

