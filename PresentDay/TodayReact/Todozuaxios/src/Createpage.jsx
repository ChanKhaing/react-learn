import React, { useContext, useState } from 'react'
import TaskContext from './context/TaskContext';
import useTaskStore from './store/useTaskStore';

const Createpage = () => {
    const [homejob, sethomejob] = useState("");
  // const { createtask } = useContext(TaskContext)
  const { createtask } = useTaskStore();
  
  console.log(useTaskStore());

  
    
    const doingjob = (event) => {
        sethomejob(event.target.value)
        // console.log(homejob)
    }

    const addjob = () => {
        createtask(job) 
        sethomejob("");
    }

  const job = {
    id: Date.now(),
    job: homejob,
    isDone: false,
  };
  return (
    <div className=" flex mb-5">
      <input
              type="text"
              onChange={doingjob}
        className=" flex-grow  border-2 border-slate-300  rounded-l-lg p-2"
              placeholder="Write your new task"
              value={homejob}
      />
      <button onClick={addjob} className=" bg-slate-300 border-2 border-slate-300  rounded-r-lg py-2 px-4">
        Add Task
      </button>
    </div>
  );
}

export default Createpage