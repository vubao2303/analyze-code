// use the rule of javaScript in a strict way, no undeclare variable 
'use strict';
// file system buid in Node method allows you to work with the file system on your computer
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
// empty object call bd, which will be used to 
var db        = {};

// Sequelize create model, an object oriented database, create table 
// the or system to pick between enviroment  or local host 
// Sequelize is an ORM – meaning that it maps an object syntax onto our database schemas.
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
// synchronously read the contents of a given directory
  .readdirSync(__dirname)
  // 
  .filter(function(file) {
    // chooses all the files that is not starting with a . or not the current file, and only those that ends with .js files 
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  // for each elements in the array, there 
  .forEach(function(file) {
    // make a table out of user.js 
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    // creating a new key this key is table name. name of the table  
    // 
  });


  // get the kt from the object. then for each key, 
  // associte is like join  
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {

    db[modelName].associate(db);
  }
});

// this one is your database that we create with sequelize 
db.sequelize = sequelize;

// this is passing the sequelize method 
db.Sequelize = Sequelize;

module.exports = db;
// export to server.js 