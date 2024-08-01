//======== SET UP BASIC EXPRESS SERVER.========
    // CONFIGURE IT TO PARSE JSON AND
    // ALLOW CROSS ORIGIN REQUESTS,
    // START LISTENING ON SPECIFIED PORT
//==================================

const express = require("express");//import express module, and assign to express variable
// express is a web framework for node js
//express simplifies making web applications and API

const mongoose = require("mongoose");//import mongoose module, and assign to mongoose variable
// mongodb is an Object Data Modelling (ODM) Library for MongoDB and Nodejs,
// it provides a schema based solution for model the application data.
//mongoose include built-in type casting, validation, query building, and business logic hooks.

require("dotenv").config();//loads environment variables from '.env' file to 'process.env'.
//.env manages environment variables
//by calling .config() the variables defined in dotenv file can be accessible from process.env file.

const cors = require("cors");//imports CORS module and assign it to cors variable.
//CORS ====> Cross Origin Resource Sharing
//'cors' middleware allows to enable CORS in various options by making it possible for server to handle the request from various domains (origins).

const app = express(); // creates an instance variable of Express Application and assign to app variable.
//app object used to configure application, define routes, set up middleware ...
//serve as the main object for the rest of application structured.

const PORT = process.env.PORT || 5000;//sets the value of the PORT variable to the value of PORT in .env file (if exists)
//if not assign 5000 to PORT variable

app.use(express.json());// this middleware function is used to parse incoming JSON requests
//when we send a request with a JSON payload to the server it ensures that the JSON data is parsed
// and available under the req.body in route handlers

app.use(cors());//this middleware function is use to enable cors &
// it allows our server to accept requests from different origins.

app.get("/",(req,res)=>{
    res.send("Hello Client");
})

app.listen(PORT, ()=> console.log(`Listening at Port ${PORT}`));//start the server and
// listening incoming requests on the specified PORT