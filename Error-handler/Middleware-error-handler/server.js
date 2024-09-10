const express = require('express');
const app = express();
const PORT = 3000;

//* Simulate an error in the middleware
app.use((req, res, next)=>{
    //? error
    const isError = true;
    if(isError) {
        //create an error obj
        const err = new Error("An error occured");
        next(err);
    }else{
        next();
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
    //setting http status code
    console.log(err.stack);
    
    res.status(err.status || 500);
    res.json({
        message: err.message,
        stack: err.stack,
        
    });
    
});


//!start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`)
);