# analyze-code

This application provides a sign up form, a sign in form using passport and bcrypt to track user uniqueness and protect user input. 


## Google Docs  

[Google Docs](https://docs.google.com/document/d/11o0NUKUAqbb803xnsruhRUmvnuE8M8fghpOQKg5eAcg/edit?usp=sharing)  

# Page Structure 
[Page Structure]()

# Table of Contents 
[Tittle](#analyze-code)

[Google Docs](#Google-Docs)

[Table of Contents](#Table-of-Content)

[Description of Page Building](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Author](#Author)

[License](#License)


## Description of Page Building 
* In server.js file 
   <ul> 
  <li> require all the nmp packages
  <li> Setting up port and requiring models for syncing
  <li> Creating express app and configuring middleware needed for authentication.
  <li> requiring routes from the routes folder
  <li> Syncing our database and logging a message to the user upon success
  <li> listen to port to kicks up the whole thing and starts the server
  </li>
  </ul>

* In js folder
  <ul> 
  <li> get document by id and class 
  <li> validate user data
  <li>  post to our "api/login" route
  <li> html route serves up html interface
  </li>
  </ul>


* In config folder
  <ul> 
  <li> Use Passport to authenticate requests.
  <li> Appply Passport-local strategy for authenticating with a username and password.
  <li>  serialize and deserialize the user input
  </li>
   </ul>



## Code Snippet
Install npm package 
npm install express

$ npm install express

Required variables 
``` Javascript

```

Sets up the Express app to handle data parsing
``` Javascript

```

Set routes to handle when user "visit" the page 
``` Javascript

```

Serialize takes your basic data structure and flatten it out into a string, by reading top to bottom. Now you have one big ass string. want to duplicate or extract, deserialize take that string and construct it again, make back into an object
``` Javascript 
passport.serializeUser(function(user, cb) {
 cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
 cb(null, obj);}); 
module.exports = passport;
```

## Technologies Used
- Node - an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.
  * [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- Git - version control system to track changes to source code
  * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)
- Express - a Node js web application server framework, which is specifically designed for building single-page, multi-page, and hybrid web applications
  * [Express](http://expressjs.com/en/api.html#express)


## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://vubao2303.github.io/portfolio/)
- [Link to Github](https://github.com/vubao2303)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


|Config 
    |
    Middleware 
          |isAuthenticate.js
    |
    config.json 
    |
    passport.js
Models
    | 
    index.js      
    |
    user.js
public
    |
    js--
        |
        login.js
        |
        memebers.js
        |
        signup.js
    |
    stylesheets
    |   |
    |    style.css
    |
    login.html
    |
    memebers.html
    |
    signup.html
    |
routes    
    |
    api-routes.js
    |
    html-routes.js
    |
|
package-lock.json
|
package.json
|
server.js