const express = require("express");

const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;

//Instance of express
const app = express();
const URL =
  "mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/students-database";
//connect to mongodb

const connectTodb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(`Error connecting to Mongodb ${error}`);
  }
};
//call function
connectTodb();

//! design schema
const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      set:(value)=>value.trim()
    },
    author:{
      type: String,
      required: true,
      set: (value) => value.trim()
    },
    price: {
      type:String,
      required: true,
      set: (value) => Math.round(value * 100/100,),
    },
    tags: {
      type: [String],
      required: true,
      set: (value) => value.map(tag=>tag.toLowerCase())
    },
    url: {
      type: String,
      required: true,
      set: (value) => `https://masynnctech.com/books/${value}`
    },
},
{timestamps: true});
//! compile the schema to form the model
const Book = mongoose.model("Book", bookSchema);

const createDoc = async () => {
  try{
    const bookCreated = await Book.create({
     title: 'mongoose for everyone',
     author: 'Mikasa the great warrior',
     price: 19.9999,
     tags:['MONGODB', "NODEJS", "MONGOOSE"],
     url: "Attack-ON-Titan-Everyone",
    });
    console.log(bookCreated);
    
  }catch(error){
    console.log(error);
    
  }
};
createDoc();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
