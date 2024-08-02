const TaskModel = require("../models/TaskModel");//imports TaskModel

//getTasks function : retrieve all the tasks documents in database and send them as HTTP response to the client
module.exports.getTasks =async (req,res)=>{ //export function 'getTasks' as a part of module's public API, making accessible from other files in the project
    const tasks = await TaskModel.find();//retrieve all documents in MongoDB collection associates with 'TaskModel' as array of all tasks documents
    res.send(tasks);// send th retrieved tasks as response to the client (send tasks array as HTTP response body in JSON format)
}

