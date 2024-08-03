import React from "react";
import {BiEditAlt, BiTrash} from "react-icons/bi";
import axios from "axios";
import {baseURL} from "../utils/constant.js";
import {BsTrash} from "react-icons/bs";
const List = ({id,task,setUpdateUI,updateMode, setInput}) => {

const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
        console.log(res);
        setUpdateUI((prevState)=> !prevState);
    })
}
    return (
        <li>
            {task}
        <div className="icon_holder">
            <BiEditAlt className="icon" onClick={()=>updateMode(id,task)}/>
            <BsTrash className="icon"  onClick={removeTask}/>
        </div>
        </li>
    )
}
export default List;