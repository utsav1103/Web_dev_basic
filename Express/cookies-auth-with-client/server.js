const express = require ('express');
const path = require('path');
const app = express();


//! middlewares
app.use(express.urlencoded({extended:true}));
//! Set the view engine

app.set('view engine','ejs');
//below code is not required because we are using app.set above
// app.set('views', path.join(__dirname, "views"));

//? simulated database of users
const users = [{
    username: 'Eren', password: '123', role:'CEO'
},
{username: 'Mikasa', password: '123', role:'HR'},];

//HOme Route
app.get('/', (req, res)=>{
    res.render('home');
});
//login route
app.get('/login', (req, res) =>{
    res.render('login');
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
        res.redirect('/dashboard');
    }
    //* else rediredct the user to login page
});

//dashBord route
app.get('/dashboard', (req, res) =>{
    res.render('dashboard');
});

//logOut route
app.post('/logout', (req, res) =>{
    
});


//start the server
app.listen(3000, console.log(`The Server is running`))

