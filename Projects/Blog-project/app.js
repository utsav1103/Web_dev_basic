const express = require("express");
const app = express();
const mongoose = require("mongoose");



//port
const PORT = process.env.PORT || 3000;

//start the server
mongoose.connect(process.env.mongodb_url).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(()=>{
    console.log("Database connection failed");
    
})

