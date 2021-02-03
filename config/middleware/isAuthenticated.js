// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // this function take in three pramameters, which are req: request; res: response; and a callback function next
  // req has properties for the request query string, parameters, body, HTTP headers. You can call it whatever you want. Just need to remember that the request object will be the first parameter in a function follow by a response object. 
  // The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
  // callback: a function that is to be excuted AFTER another function has finished excuting
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
// Middleware fucntions are function that have access to the request object, response object, and the next function 
// middleware can execute any code, make cahnges to req and res, end the cycle of the function, and call in the next middleware in the stack 