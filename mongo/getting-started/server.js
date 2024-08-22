const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;
//connect to mongodb

//username mongodb = utsavu858
//password mongodb = eynD6Q6Q03hMtTKZ

//mongodb url = mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/students-database
//?   1.create the client
const client = new MongoClient("mongodb+srv://utsavu858:eynD6Q6Q03hMtTKZ@utsav-cluster.osnhx.mongodb.net/students-database", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//? 2. function to connect
const connectDB = async() => {
    try {
        await client.connect();
        console.log("MongoDB connected successfully");
        //1.database name (school);
        const database = client.db('masynctech');
        //2.Collections (students)
        const students = database.collection('students');
        //3.Documents() using the insertOne
        // const result = await students.insertOne({
        //   name: 'Tissa',
        //   age: 20,
        //   subject: ['Math', 'Physics'],
        // });
        //4.Documents() using the insertMany
        // const results = await students.insertMany([
        //   {name: "Utsav",
        //     age: 21,
        //     subject:['Music','Sports'],
        //   },
        //   {name: "Tan",
        //     age: 20,
        //     subject:['Music','Programming'],
        //   },
        // ])
        //! -- read operations --
        //? find method

        // const resultCursor = students.find();
        // const results = await resultCursor.toArray();
        //? findOne method

        const results = await students.findOne({
          age: 20
        });

        console.log(results);
        
    }catch(error){
        console.log(error);
        
    }
};

//? 3. Call the function
connectDB();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
