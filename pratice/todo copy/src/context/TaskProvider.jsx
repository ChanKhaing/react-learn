


import React, { useState } from 'react'
import TaskContext from './TaskContext'

const TaskProvider = ({ children }) => {
    
    const [tasks, setTask] = useState([
      {
        id: 1,
        job: "focus on your code",
        isDone: false,
      },
      {
        id: 2,
        job: "reduce your time to use phone",
        isDone: true,
      },
      {
        id: 3,
        job: "Finish project report",
        isDone: false,
      },
    ]);

    const length = tasks.length;
    const createtask = (newtask) => {
      setTask([...tasks, newtask]);
    };

    const deletetask = (id) => {
      setTask(tasks.filter((task) => task.id != id));
    };
  
  const donetask = (id) => {
    setTask(tasks.map((el) => el.id === id ? { ...el, isDone: !el.isDone } : el))
  }
  
  const edittask = (id,current) => {
    setTask(tasks.map((el) => el.id == id ? {...el, job: current} :el ))
  }
    return (
        <TaskContext.Provider value={{tasks, length, createtask, deletetask,donetask,edittask}}>
            {children}
      </TaskContext.Provider>
  )
}

export default TaskProvider