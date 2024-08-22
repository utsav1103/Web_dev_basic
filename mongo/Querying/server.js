const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;
//connect to mongodb

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
        console.log("MongoDB Connected successfully");
        const database = client.db('masynctech');
        //collections
        const employees = database.collection('employees')
        // const employeesDocs = [
        //   {name: "Utsav", age:21 , department: "HR"},
        //   {name: "Tissa", age:20 , department: "Finance"},
        //   {name: "Hina", age:21 , department: "IT"},
        //   {name: "Mikasa", age: 22, department: "Operations"},
        //   {name: "Van", age: 21, department: "IT"},
        // ];
        // const result = await employees.insertMany(employeesDocs);
        // console.log(result);
        
        //? Querying operators
        //! $gt
        // const employeesCursor = employees.find({age: {$gt: 20}});
        // const result = await employeesCursor.toArray();
         //! $gte
        //  const employeesCursor = employees.find({age: {$gte: 20}});
        //  const result = await employeesCursor.toArray();

        //! $ne
        // const employeesCursor = employees.find({age: {$ne: 20}});
        //  const result = await employeesCursor.toArray();

        //! $lt
        // const employeesCursor = employees.find({age: {$lt: 22}});
        //  const result = await employeesCursor.toArray();

        //! $lte
        // const employeesCursor = employees.find({age: {$lte: 20}});
        //  const result = await employeesCursor.toArray();

        //! multiple condition
        const employeesCursor = employees.find({age: {$gt: 19, $lt: 22}});
          const result = await employeesCursor.toArray();

        console.log(result);
        
        
    }catch(error){
        console.log(error);
        
    }
};

//? 3. Call the function
connectDB();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
