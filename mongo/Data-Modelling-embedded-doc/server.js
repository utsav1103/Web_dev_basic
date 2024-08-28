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
//!address schema here
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number,
},{timestamps: true});
//!user schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  state: String,
  address: addressSchema,//our embedded doc
},{
  timestamps: true
});

//? compile the schema
const User = mongoose.model("User", userSchema);

const createUser = async () => {
  try{
    const newUser = await User.create({
      name: 'Tissa',
      email: 'Tissa@gmail.com',
      address: {
        street: 'Kumasi Ot2',
        city: 'Camp',
        state: 'Ghana',
        zip: 1122,
      }
    })
    console.log(newUser);
    
  }catch(error){
    console.log(error);
    
  }
};

createUser();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
