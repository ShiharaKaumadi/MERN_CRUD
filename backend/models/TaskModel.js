//========Task Model
// Model generally represents a collection in MongoDB Database and provide and interface to interact with database
//This allows to Create, Read, Update, Delete documents based on the schema
//========
const mongoose = require("mongoose");//Imports mongoose library
const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    }
}) //creates new Schema for a collection in mongoDB.
//Schema constructor provided by Mongoose, and it defines the structure of the document in the collection,
// it defies the shape of document
//It includes data types, fields, and validation rules

module.exports = mongoose.model("Task",taskSchema);// create a model from schema and export it.
//name of the model ==> 'Task'
//schema ==> taskSchema