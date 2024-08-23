const express = require ('express');
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT

//Instance of express
const app = express()
const URL = "mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/students-database";
//connect to mongodb

const connectTodb = async() =>{
    try{
        await mongoose.connect(URL);
        console.log("Mongodb connected successfully");
        
    }catch(error){
        console.log(`Error connecting to Mongodb ${error}`);
        
    }
};
//call function
connectTodb();
//Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`)
);