import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TasksList from "./components/TasksList";

function App() {
  const [task, setTaks] = React.useState(TasksList);

  // functino to add or delete tasks
  function deleteTask(id){
    // implement the functionality
    // Clcik is working
    console.log(id)
  }

  return (
    <div className="container">
      <Header title="This is title" />
      <Tasks tasks={task} onDelete={deleteTask} />
    </div>
  );
}

export default App;
