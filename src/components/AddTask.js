import "../style.css"
import React from "react";

function AddTask(props){
    // Create state 
    const [text, setText] = React.useState('');
    const [day, setDay] = React.useState('');
    const [reminder, setTreminder] = React.useState(false);

    function onSubmit(event){
        event.preventDefault();
        // Form validation 
        if (!text){
            alert('Please add a task');
            return;
        } else if (!day){
            alert('Please add a day')
            return;
        }

        props.onAdd({text, day, reminder});
        // Clear the form
        setText('');
        setDay('');
        setTreminder(false);
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day & time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setTreminder(e.currentTarget.checked)} />
            </div>
            
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask;