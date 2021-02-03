// this is the required depencencies so we can use it
var passport = require("passport");

// one of th stratergy for passport, it is asking for username and password 
var LocalStrategy = require("passport-local").Strategy;

// this is pointing to the modles folder 
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // dbUser can be farley bacon if consistce. you may see it as date, or result, response, answer 
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      // always return done, a callback function that execute. again, what it is saying is just the db 
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
// push this passort away to be use somewhere else 


// send this array somewhere out, need to translate it to something to send 
// seialize take your basic data structure and flaten it out into a string, by reading top to bottom. Now you have one big ass string. 
// want to duplicate or extract 
// deserialize take that string and construct it again, make back into an object 
