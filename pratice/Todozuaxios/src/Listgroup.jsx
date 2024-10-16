import React, { useContext } from 'react'
import List from './List'
import TaskContext from "./context/TaskContext";
import useTaskStore from './store/useTaskStore';

const Listgroup = () => {
  // const { tasks } = useContext(TaskContext)
  // console.log(useTaskStore());
  const { tasks } = useTaskStore();
  return (
    <div>
      {
        tasks.map((el) => <List key={el.id} task={ el} /> )
      }
    </div>
  )
}

export default Listgroup