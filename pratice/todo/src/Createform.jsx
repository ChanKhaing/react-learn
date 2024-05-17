import React, { useState } from 'react'


const Createform = (props) => {

    const [task, settask] = useState('');

    const addbtnhandler = () => {
        props.createlist(task);
        settask('');
    }

    const newjobhandler = (event) => {
       settask(event.target.value)
    }
    const addtaskhandler = (event) => {
        if (event.key == "Enter" || event.key == "Esc") {
            props.createlist(task);
            settask('');
        }
    }
  return (
    <div>
      <div className="flex mb-5">
        <input
          type="text"
          id="textInput"
          value={task}
          onChange={newjobhandler}
          onKeyUp={addtaskhandler}
          className="border-2 border-zinc-700 focus-visible:outline-none flex-grow px-3"
        />
        <button id="addBtn" onClick={addbtnhandler} className="bg-zinc-700 text-zinc-50 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Createform