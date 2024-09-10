const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3000;

//*Route to fetch post
app.get('/post', async(req, res, next) =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        res.json(response.data)
    }catch(err){
        next(err);
    }
});

//?Regular route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to built in error handler'
    });
});

//! CUstom error handling middleware

app.use((err, req, res, next)=>{
    //check if it's axios error
    if(err.response){
        res.status(err.response.status).json(err.response.data);
    }else if(err.requrest){
        res.status(404).json({message:"Service unavaile"});   
    }else{
        res.status(303).json({message: "Someting went wrong"});
    }
    
});


//!start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`)
);