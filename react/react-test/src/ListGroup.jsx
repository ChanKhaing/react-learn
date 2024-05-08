// eslint-disable-next-line no-unused-vars
import React from 'react';
import EmptyList from './EmptyList';
// import List from './List';

const ListGroup = () => {

  const tasks = [
    { id: 1, job: "Complete homework", isDone: false },
    { id: 2, job: "Do laundry", isDone: true },
    { id: 3, job: "Buy groceries", isDone: false },
    { id: 4, job: "Clean the house", isDone: false },
    { id: 5, job: "Exercise", isDone: true },
    { id: 6, job: "Read a book", isDone: false },
    { id: 7, job: "Cook dinner", isDone: true },
  ];


  return (
    <div>
     <EmptyList/>
      {
        tasks.map( (task) => (
          <div className={ ` ${task.isDone && " opacity-50 scale-75 text-green-500"} border bg-gray-300 border-gray-300 mb-3 p-2`} key={task.id}> 
             <p>
            {task.id} | {task.isDone ? "done" : "not yet"}
          </p>
          <p>{task.job}</p>
          </div>
        ))
      } 
    </div>
  );
}

export default ListGroup

//  <div
//           className={` ${
//             task.isDone && "opacity-40 scale-75"
//           } border bg-gray-300 border-gray-300 p-2 mb-3`}
//           key={task.id}
//         >
         