const TaskModel = require("../models/TaskModel");//imports TaskModel

//getTasks function : retrieve all the tasks documents in database and send them as HTTP response to the client
module.exports.getTasks =async (req,res)=>{ //export function 'getTasks' as a part of module's public API, making accessible from other files in the project
    const tasks = await TaskModel.find();//retrieve all documents in MongoDB collection associates with 'TaskModel' as array of all tasks documents
    res.send(tasks);// send th retrieved tasks as response to the client (send tasks array as HTTP response body in JSON format)
}

//saveTasks function : saving new task in database and send HTTTP response to client (responsible for saving new tasks in database)
module.exports.saveTasks = (req,res)=>{ //make 'saveTasks' function accessible from all files in the project
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

