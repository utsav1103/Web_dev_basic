const express = require("express");
const app = express();
const PORT = 5001;
//!>>>>> Built in middlewares


//? serve static files
// app.use(express.static())

//?pass incoming data
app.use(express.json());

//?passing incoming url encoded data
app.use(express.urlencoded());

//!Application level middlewares

//*logging details of every request

// app.use((req, res , next)=>{
//     console.log(req.body);
    
//     console.log("An app level middleware");
//     //call next
//     next();
    
// });
//another method to create middleware
const logRequest = (req, res , next)=>{
        console.log(`Request received at: ${new Date().toISOString()} for ${req.metho} to ${req.path}`);
        
        
        //call next
        next();
        
    };
    app.use(logRequest);
//Home route
app.get("/", (req, res) =>{
   console.log
    (
    req.body
    );
    res.json({
        message: 'Welcome Dear tissa...',
    })
});

//Create a book
app.post("/books", (req, res) =>{
    res.json({
        message: 'Built in middlewares demo... tissa',
    })
});


//*start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));