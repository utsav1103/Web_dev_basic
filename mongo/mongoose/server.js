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

const user = mongoose.model("User", userProfileSchema);
//! CRUD OPERATIONS

//?create operation
//save
// const newUser = new user({
//   username: "EREN",
//   age: 21,
//   birthday: new Date("2003-03-11"),
//   isActive: true,
//   hobbies: ["Cricket", "Reading", "Swimming"],
//   address: {
//     street: "example",
//     city:'Indore',
//     postCode: 1111,
//   },
//   customData: {
//     country: "India",
//   },
// });

//save the document
// newUser
// .save()
// .then((data) => {
//     console.log(data);
    
// })
// .catch((e) => console.log(e));

//create 
// user.create({
//     username: "MIkASA",
//     age: 20,
//     birthday: new Date("2004-03-11"),
//     isActive: true,
//     hobbies: ["basketball", "pet-parent", "Musician"],
//     address: {
//       street: "example",
//       city:'Indore',
//       postCode: 1111,
//     },
//     customData: {
//       country: "India",
//     },
//   })
//     .then((data) => {
//       console.log(data);
      
//     })
//     .catch((e) => console.log(e));
  

//! Read operations
//? find
// user.find().then((user) => {
//     console.log(user);
    
// }).catch(e=>console.log(e)
// );
//?findOne

// user.findOne({
//     age: 20,
// }).then((user) => {
//         console.log(user);
        
//     }).catch(e=>console.log(e)
//     );
//? findById
// user.findById(/*objectID*/).then((user) => {
//             console.log(user);
            
//         }).catch(e=>console.log(e)
//         );


//!QUERY OPERATOR

//? WHERE
// const findUsers = async () => {
//   try{
//     const users = await user.find().where('age').gte(20);
//     console.log(users);
    
//   }catch(error){
//     console.log(error);
    
//   }
// };
// findUsers();
//? Limit

const findUsers = async () => {
    try{
      const users = await user.find().where('age').gte(20).sort({username: 1}).limit(1);
      console.log(users);
      
    }catch(error){
      console.log(error);
      
    }
  };
  findUsers();

//Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
