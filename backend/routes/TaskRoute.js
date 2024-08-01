//1--->basic express router for handling HTTP GET request at '/get' endpoint
//extract Router from Express
const {Router} = require("express");//import Router class from Express Library
const router = Router();//creates an instance of Router class
//this 'router' object can be used to define routes and middleware for the application

router.get("/get",getTasks);// defines route handler for HTTP GET request to the '/get' path.
//When a GET request is made to this endpoint the 'getTasks()' function will be called to handle the request

module.exports = router// export router object
// so other modules in the application can import and use the defined routes and middleware
