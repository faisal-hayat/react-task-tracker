import "../style.css"
import React from "react";
import Task from "./Task";

function Tasks(props){
    
    return(
        <>
        {props.tasks.map((task) => (
            // <h3 key={task.id}>{task.text}</h3>
            <Task task={task} onDelete={props.onDelete} />
        ))}
        </>
    )
}


export default Tasks;