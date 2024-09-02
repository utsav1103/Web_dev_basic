const express = require ('express');
const path = require('path');
const app = express();


//! middlewares
app.use(express.urlencoded({extended:true}));
//! Set the view engine

app.set('view engine','ejs');
app.set('views', path.join(__dirname, "views"));

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

