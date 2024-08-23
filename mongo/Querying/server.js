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
        const employees = database.collection('employees');
        const books = database.collection('books')
        // const employeesDocs = [
        //   {name: "Utsav", age:21 , department: "HR"},
        //   {name: "Tissa", age:20 , department: "Finance"},
        //   {name: "Hina", age:21 , department: "IT"},
        //   {name: "Mikasa", age: 22, department: "Operations"},
        //   {name: "Van", age: 21, department: "IT"},
        // ];
        // const result = await employees.insertMany(employeesDocs);

        const booksDocs = [
          {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            genre: "Dram",
          },
          {
            title: "The 1984",
            author: "Geaorge Orwell",
            year: 1949,
            genre: "Dystopian",
          },
    
          {
            title: "The Catcher in the Rye",
            author: "JD",
            year: 1951,
            genre: "Drama",
          },
          {
            title: "The Brave World",
            author: "Huxley",
            year: 1932,
            genre: "Dysptopian",
          },
          {
            title: "The Hobbit",
            author: "J.R.R",
            year: 1937,
            genre: "Fantasy",
          },
        ];

        //* creating books collection

        //  const results = await books.insertMany(booksDocs);
        //  console.log(results);
        
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
        // const employeesCursor = employees.find({age: {$gt: 19, $lt: 22}});
        //   const result = await employeesCursor.toArray();

        // console.log(result);
        //? logical operators

        // //! or operator
        // const booksCursor = books.find({$or:[{genre:'Drama'},{year:{$lt: 1950}}],
        // });
        //  const result = await booksCursor.toArray();
        //  console.log(result);

        // //! And operator
        // const booksCursor = books.find({$and:[{genre:'Dystopian'},{year:{$gt: 1930}}],
        // });
        //  const result = await booksCursor.toArray();
        //  console.log(result);

        //! Nor operator
        const booksCursor = books.find({$nor:[{genre:'Drama'},{year:{year: 1930}}],
        });
         const result = await booksCursor.toArray();
         console.log(result);
        
    }catch(error){
        console.log(error);
        
    }
};

//? 3. Call the function
connectDB();

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
