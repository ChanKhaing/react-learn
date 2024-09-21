import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  // app state
  const [tasks, setTask] = useState([]);
  const [loading, setloading] = useState(true);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  // const fetchData = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();
  //   console.log(data);
  //   setTask(data);
  //   console.log(tasks);
  // };
  const fetchTask = async () => {
    // setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    // setTaskLoading(false);
  };


  useEffect(() => {
    fetchTask();
  },[]);

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className=" p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
