const express = require('express');
const PORT = 5000;
const app = express();



//* Start the server
app.listen(PORT, console.log(`Server is up and running ${PORT}` ));