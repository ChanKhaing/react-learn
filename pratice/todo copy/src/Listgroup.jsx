import React, { useContext } from 'react'
import List from './List'
import TaskContext from "./context/TaskContext";

const Listgroup = () => {
  const {tasks} = useContext(TaskContext)
  return (
    <div>
      {
        tasks.map((el) => <List key={el.job} task={ el} /> )
      }
    </div>
  )
}

export default Listgroup