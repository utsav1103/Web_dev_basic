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

//!  Author schema

const authorSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
//? compile the author schema to form model

const Author = mongoose.mongoose.model("Author", authorSchema);

//!  Books schema here
const BooksSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Author',
    }
    
  },
  { timestamps: true }
);


//? compile the schema
const Book = mongoose.model("Book", BooksSchema);

//! create author

const createAuthor = async () => {
  try{
    //create author
    const newDoc = await Author.create({
      name: "MIKASA",
    });
    console.log(newDoc);
  }catch(error){
    console.log(error);
    
  }
};
// createAuthor();

//! create author

const createBook = async () => {
  try{
    //create author
    const newDoc = await Book.create({
      title:'Has a furry face',
      
    });
    console.log(newDoc);
  }catch(error){
    console.log(error);
    
  }
};
createBook();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
