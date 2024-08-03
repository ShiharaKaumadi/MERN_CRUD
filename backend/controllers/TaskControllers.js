const TaskModel = require("../models/TaskModel");//imports TaskModel

//getTasks function : retrieve all the tasks documents in database and send them as HTTP response to the client
module.exports.getTasks =async (req,res)=>{ //export function 'getTasks' as a part of module's public API, making accessible from other files in the project
    const tasks = await TaskModel.find();//retrieve all documents in MongoDB collection associates with 'TaskModel' as array of all tasks documents
    res.send(tasks);// send th retrieved tasks as response to the client (send tasks array as HTTP response body in JSON format)
}

//saveTasks function : saving new task in database and send HTTTP response to client (responsible for saving new tasks in database)
module.exports.saveTask = (req,res)=>{ //make 'saveTasks' function accessible from all files in the project
    const {task} = req.body;// use destructuring to extract 'tasks' from request body

    TaskModel.create({task}) // creates  a new document in mongoDB collection associate with the 'TaskModel' model
        .then((data) => {
            console.log("Saved Successfully!");
            res.status(201).send(data);
        }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong.."})
    })
};

//updateTask function: handles updating of task details in database by uniquely identifying task by its id
module.exports.updateTask = (req,res)=>{
    const {id} = req.params;//extracting id from URL
    const {task} = req.body;//extracting task from url to uniquely identify the task to be updated

    TaskModel.findByIdAndUpdate(id,{task}) //find the task by id and update with new task details
        .then(() => {
            console.log("Updates Successfully!");
            res.send("Updated");
        }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong.."})
    })
};

//deleteTask function: handles deletion of task in database by uniquely identifying task by its id
module.exports.deleteTask = (req,res)=>{
    const {id} = req.params;//extracting id from URL to uniquely identify the task to be deleted

    TaskModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("Deleted Successfully!");
            res.send("Deleted");
        }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong.."})
    })
};

