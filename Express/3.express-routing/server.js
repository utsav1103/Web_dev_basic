const express = require("express");
const app = express();
const PORT = 5000;

//home route
app.get('/', (req, res) => {
    res.json({
        message: "welcome tissa..",
    });
});


//! users route
//Getting all users 
app.get('/users', (req, res)=>{
    res.json({
        message: "all users fetched",
    });
})


//getting a user
app.get('/users/:id', (req, res)=>{
    res.json({
        message: "User fetched",
    });
});

//update a user
app.put('/users/:id', (req, res)=>{
    res.json({
        message: "user updated",
    });
});

//delete a user

app.delete('/users/:id', (req, res)=>{
    res.json({
        message: "user deleted",
    });
});

//! posts route
//Getting all users 



//getting a user


//update a user


//delete a user



//*start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));