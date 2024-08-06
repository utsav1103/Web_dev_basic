const express = require("express");

//! instance
const app = express();
//* Create the PORT
const PORT = 5000

//? Define the route handlere

app.get('/', (req, res)=>{
    res.send('HELLO... TISSA')
});

//! start our server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})


// console.log(app);