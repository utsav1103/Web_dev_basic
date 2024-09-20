const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ("dotenv").config();
const User = require("./models/User");
const userRoutes = require("./routes/authRoutes");


//port
const PORT = process.env.PORT || 3000;

//middlewares: passing form data
app.use(express.urlencoded({extended: true}));

//EJS
app.set("view engine", "ejs");


//routes
app.use('/auth', userRoutes);

//* start server



mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected successfully");
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(()=>{
    console.log("Database connection failed");
    
})

