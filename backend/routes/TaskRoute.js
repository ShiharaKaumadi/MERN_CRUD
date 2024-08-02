//1--->basic express router for handling HTTP GET request at '/get' endpoint

const {getTasks, saveTask, updateTask, deleteTask} = require("../controllers/TaskControllers"); //import getTasks from TaskControllers

//extract Router from Express
const {Router} = require("express");//import Router class from Express Library
const router = Router();//creates an instance of Router class
//this 'router' object can be used to define routes and middleware for the application

router.get("/get",getTasks);// defines route handler for HTTP GET request to the '/get' path.
//When a GET request is made to this endpoint the 'getTasks()' function will be called to handle the request

router.post("/save",saveTask);// defines route handler for HTTP POST request to the '/save' path.

router.put("/update/:id",updateTask);// defines route handler for HTTP PUT request to the '/update/:id' path.

router.delete("/delete/:id",deleteTask);// defines route handler for HTTP DELETE request to the '/delete/:id' path.

module.exports = router// export router object
// so other modules in the application can import and use the defined routes and middleware
