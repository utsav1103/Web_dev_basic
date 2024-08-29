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
//!students schema here
const studentsSchema = new mongoose.Schema(
  {
    name: String,
    grade: String,
    age: Number,
  },
  { timestamps: true }
);
//!classroom schema

const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [studentsSchema]
    
  },
  {
    timestamps: true,
  }
);

//? compile the schema
const ClassRoom = mongoose.model("Classroom", classroomSchema);

const createClassroom = async () => {
  try {
    const newDoc = await ClassRoom.create({
      className: 'Math 101',
      students: [
        {name: 'Tissa',age: '20', grade:'B'},
        {name: 'Utsav',age: '21', grade:'A'},{name: 'Mikasa',age: '20', grade:'A'},
      ]
    });
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }
};

createClassroom();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
