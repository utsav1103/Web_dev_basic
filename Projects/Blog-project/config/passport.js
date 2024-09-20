const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require("passport");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          //find the user
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, {
              message: "User not found with that email",
            });
          } //compare the provided password with the hashed password in the db
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: "Incorrect password" });
          } //Authrentication successful, return the user object
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  //serializeUser: determines which data of the user object should be stored in the session here we staore the user id.

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });
  //deseriallize the user object based on the user Id stored in the session 
  passport.deserializeUser(async  function (id, done){
    try{
        const user = await User.findById(id);
        done(null, user);
    }catch(error){
        done(error);
    }
  });

};




