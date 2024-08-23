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

//! Design schema
const userProfileSchema = new mongoose.Schema({
    username: String,
    age: Number,
    birthday: Date,
    isActive: Boolean,
    hobbies: [String],
    objectId: mongoose.Schema.Types.ObjectId,
    address: {
        street: String,
        city: String,
        postCode: Number,
    },
    customData: mongoose.Schema.Types.Mixed,
});

//! Compile the schema to form the model

const user =  mongoose.model("User", userProfileSchema);

//Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`)
);