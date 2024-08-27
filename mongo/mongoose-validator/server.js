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
const userProfileSchema = new mongoose.Schema({
username: {
  type: String,
  required: [true, 'username is required'],
  validate: {
    validator: function(value){
      return /^[a-zA-Z0-9]+$/.test(value)
    },
    message:'Username can only contain alphanumeric character'
  }
},
email: {
  type: String,
  required: [true, 'Email is required'],
  validate: {
    validator: function(value){
      return value.endsWith("@gmail.com");
    },
    message:'Email must end with @gmail.com'
  },
},
// age: {
//   type: Number,
//  enum:['Male','Female'],
//   min: 18,
//   max: 25,
// },
// gender: {
//   type: String,
//   required: [true, 'Email is required'],
  
// },
});
//! compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);

const createDoc = async () => {
  try{
    const userCreated = await User.create({
      // gender: "Female",
      username: 'Mikasa',
      // age: 20,
      email: 'mikasa@gmail.com'
    });
    console.log(userCreated);
    
  }catch(error){
    console.log(error);
    
  }
}

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
