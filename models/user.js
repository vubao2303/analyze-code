// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// safely restore the password, basically encrypt it. 
var bcrypt = require("bcryptjs");
const { TableHints } = require("sequelize/types");


// Creating our User model
module.exports = function(sequelize, DataTypes) {
  // create a Table called User
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    //  validate user input and make sure they meet the requirement 
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // method that you apply for a object that check if the password meet the requirement 
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password. Hash means hiding password 
  //  this is a fucntion that sure fucntions get execute the way we want it to be, in this case, we what it to act before Create 
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
// A salt is a random string that makes the hash unpredictable.
// Hashing algorithms turn a plain text password into a new fixed-length string called a hash.