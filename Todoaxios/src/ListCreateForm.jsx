// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const ListCreateForm = (props) => {
  // const [text, setText] = useState("chan");
  
  // const texthandler = (event) => {
  //   setText(event.target.value);
    
  // }
  return (
     
    <div className="flex mb-5">
      {/* {props.createlist("chan")} */}
      <input
        type="text"
        id="textInput"
        // onChange={texthandler}
        // value={text}
        className="border-2 border-zinc-700 focus-visible:outline-none flex-grow px-3"
      />
      <button id="addBtn" className="bg-zinc-700 text-zinc-50 p-4">
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
  );
}

export default ListCreateForm