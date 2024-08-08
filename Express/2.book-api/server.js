const express = require("express");
const app = express();
const PORT = 5000;

//!receiving incoming data 
app.use(express.json());
const books = [
    {id:'1', title:'The Sweet Tissa..', author:'Utsav'},
    {id:'2', title:'The Joker & The Queen..', author:'Jiyzz'},
    {id:'3', title:'The Lost KID..', author:'Tissa'},
];

//!HOme toute
app.get('/', (req , res)=>{
    res.json({
        status:'Sucess',
        message:'Welcome to my first book api using express',
        data:'utsav',
    });
});

//? Fetching all books
app.get('/books', (req, res) =>{
    res.json({
        status: "Success",
        message:"Books fetched successfully",
        data: books,
    });
});

//? Fetching single book
app.get('/books/:id', (req, res) =>{
    const id = req.params.id
    const bookFound = books.find((book)=>book.id === id);
    if(!bookFound){
        return res.json({
            status: 'failed',
            message: `Book with id ${id} not found`
        });
    }
    res.json({
        status: "Success",
        message:"Books fetched successfully",
        data: bookFound
    });
});

//! Create a book
app.post("/books", (req, res) => {
    console.log(req.body);
    const newPost = req.body;
    books.push(newPost);
    res.json({
        status : 'Success',
        message: "Book created successfully",
        data: books,

    });
});


//*start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));