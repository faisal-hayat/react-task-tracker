// import components, style and material icon
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

function App() {
  const [task, setTasks] = React.useState(TasksList);
  const [showAddTask, setShowAddTask] = React.useState(false);
  
  // function to add task
  function addTask(data){
    alert('show task bool value is : => ', showAddTask)
   const id = task.length + 1;
   const newTask = {id, ...data };
   setTasks([...task, newTask])
  }
  
  // functino to add or delete tasks
  function deleteTask(id){
    // implement the functionality
    setTasks(task.filter((t) => t.id !== id));
  }

  function toggleReminder(id){
    // This one is working
    // <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} />
    setTasks(task.map((t) => t.id === id ? { ...t, remainder: !t.remainder } : t))
  }

  function onClickButton(event){
    console.log('button has been clicked')
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={onClickButton} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {task.length ? <Tasks tasks={task} onDelete={deleteTask} onToggle={toggleReminder} /> : <h1>No task in the list</h1>}
    </div>
  );
}

export default App;
