const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ("dotenv").config();


//port
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected successfully");
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(()=>{
    console.log("Database connection failed");
    
})

