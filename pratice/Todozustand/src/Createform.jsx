import React, { useState } from 'react'

const Createform = (props) => {
 
  const { job, setjob } = useState("hello"); 

  return (
    <>
      <div className=" flex mb-5">
        <input
          type="text"
          className=" flex-grow  border-2 border-slate-300  rounded-l-lg p-2"
          placeholder="Write your new task"
        />
        <button
          
          className=" bg-slate-300 border-2 border-slate-300  rounded-r-lg py-2 px-4"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default Createform