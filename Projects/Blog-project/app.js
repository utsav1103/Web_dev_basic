require ("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const session = require("express-session");
const User = require("./models/User");
const userRoutes = require("./routes/authRoutes");
const passportConifg = require("./config/passport");
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorHandler");


//port
const PORT = process.env.PORT || 3000;

//middlewares: passing form data
app.use(express.urlencoded({extended: true}));


//session middleware
app.use(session({
    secret:"keyboard cat",
    resave: false,
    saveuninitialized: false, 
    store: MongoStore.create({mongoUrl: process.env.MONGODB_URL}),
}))

// Method override middleware

app.use(methodOverride('_method'));

//passport
passportConifg(passport);
app.use(passport.initialize());
app.use(passport.session());

//EJS
app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
    res.render("home",{
        user: req.user,
        title: "Home",
        error: "",
    });
});

//routes
app.use('/auth', userRoutes);
app.use('/posts', postRoutes);


//? error handler middlware call
app.use(errorHandler);


//* start server
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected successfully");
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(()=>{
    console.log("Database connection failed");
    
})

