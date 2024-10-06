import React, { useState } from "react";






const Listtest = (props) => {
  // const [newjob, setnewjob] = useState(props.job);
  const [edit, setedit] = useState(false);
  const [editjob,seteditjob] = useState(props.task.job)

  const delbtnhandler = () => {
    props.deletetask(props.id);
  };

  const checkhandler = () => {
    props.checktask(props.id);
  };

  const checkbtn = () => {
     
  };

  const editbtn= (event) => {
    // console.log("u click edit");
    setedit(true);
   
    
  };


  const editbtnhandler = (event) => {
    seteditjob(event.target.value);
  }

  const editinputandler = (event) => {
    if (event.key === "Enter" || event.key == "Escape") {
      props.edittask(editjob, props.id);
      setedit(false);
    }
  
    
  }

  return (
    <div className="list group bg-white animate__animated animate__backInLeft border border-zinc-700 p-3 mb-3 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="list-checkbox accent-zinc-700 w-4 h-4"
            onClick={checkhandler}
            onChange={checkbtn}
            checked={props.isDone}
          />
          {edit ? (
            <input
              type="text"
              className=" border border-stone-700 text-xs py-1 px-2"
              value={editjob}
              onChange={editbtnhandler}
              onKeyUp={editinputandler}

              // value={newjob}
              // onChange={handlenewjobinput}
              // onKeyUp={handlenewjobinputupdate}
            />
          ) : (
            // <p className={`${props.isDone ? "line-through" : ""}`}>
            //   {newjob}
            // </p>
            <p className="">{editjob}</p>
          )}
        </div>
        <div className="flex gap-2 duration-300 translate-x-0">
          <button
            className="list-edit-btn border duration-200 active:scale-90 border-zinc-700 p-2"
            onClick={editbtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 stroke-zinc-700 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button
            onClick={delbtnhandler}
            className="list-del-btn border duration-200 active:scale-90 border-zinc-700 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 stroke-zinc-700 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listtest


