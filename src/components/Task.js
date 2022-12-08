import "../style.css";
import React from "react";
import { FaTimes } from "react-icons/fa";



function Task(props){
    const style = {
        color: 'red',
        cursor: 'pointer'
    }
    return(
        <div className={`task ${props.task.remainder ? 'reminder' : ''}`}>
            <h3 id={props.task.id} onDoubleClick={() => props.onToggle(props.task.id)}>
                {props.task.text} <FaTimes style={style}
                 onClick={() => props.onDelete(props.task.id)}
                />
            </h3>
            <p>Day : {props.task.day}</p>
        </div>
    )
}

export default Task;