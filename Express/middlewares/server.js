const express = require("express");
const app = express();
const PORT = 5001;
//? serve static files
// app.use(express.static())

//!pass incoming data
app.use(express.json());

//*passing incoming url encoded data
app.use(express.urlencoded());

//Create a book
app.post("/books", (req, res) =>{
    res.json({
        message: 'Built in middlewares demo... tissa',
    })
});


//*start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));