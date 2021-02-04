// Requiring necessary npm packages
var express = require("express");

// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();

// parses incoming requests as data or string  and  returns an Object. 
app.use(express.urlencoded({ extended: true }));

// take incoming data as an object and return an object 
app.use(express.json());

// serves static files in the public folder.
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));


app.use(passport.initialize());

// middleware  that used for application uses persistent login sessions
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
// sequelize.sync automatically synchronize all models
// app.listen kicks up the whole thing and starts the server. 
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
