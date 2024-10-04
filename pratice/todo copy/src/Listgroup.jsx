import React, { useContext } from 'react'
import List from './List'
import TaskContext from "./context/TaskContext";

const Listgroup = () => {
  const {tasks} = useContext(TaskContext)
  return (
    <div>
      <h3 className=" font-bold font-serif text-xl mb-3">
        Task List (Total {tasks.length}, Done{
          tasks.filter((el) => el.isDone).length })
      </h3>
      {tasks.map((el) => (
        <List key={el.job} task={el} />
      ))}
    </div>
  );
}

export default Listgroup