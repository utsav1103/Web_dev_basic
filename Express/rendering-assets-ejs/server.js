const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;
// Serve the static files/folder

app.use(express.static(path.join(__dirname, 'public')));


//?Render home page/route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','home.html'));
});

//?Render about page/route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','about.html'));
});

//?Render contact page/route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','contact.html'));
});

//?Render gallery page/route
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','gallery.html'));
});






//! start the server
app.listen(PORT, console.log(`SERver is running on port ${PORT} , Tissa..`)
);