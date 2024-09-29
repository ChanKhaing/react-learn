import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import useSWR, { useSWRConfig } from "swr";
// import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());



const App = () => {
  // app state
  const [tasks, setTask] = useState([]);

  const { data, error, isLoading } = useSWR("http://localhost:5000/tasks", fetcher);
  const {mutate} = useSWRConfig();


  const addTask = async (newTask) => {
     const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),    
    })
    const data = await response.json();
    setTask([...tasks, data]);
    mutate("http://localhost:5000/tasks");
  };

  const removeTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
    });
    mutate("http://localhost:5000/tasks");
    // setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async(id, current) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !current }),
    });
    mutate("http://localhost:5000/tasks");
    // setTask(
    //   tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    // );
  };

  return (
    <div className=" p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      {
        isLoading ? <p>Loading...</p> : <TaskList tasks={data} removeTask={removeTask} doneTask={doneTask} />
      }
    </div>
  );
};

export default App;
