const express = require("express");
const userRoutes = express.Router();

const User = require("../models/User");
const {getLogin, login ,getRegister, register, logout} = require("../controllers/authController");

userRoutes.get('/login', getLogin);

//MAIN LOGIC FOR USE LOGIN

userRoutes.post("/login", login );

userRoutes.get('/register', getRegister);

userRoutes.post('/register', register);

//logout

userRoutes.get('/logout', logout);

module.exports = userRoutes;