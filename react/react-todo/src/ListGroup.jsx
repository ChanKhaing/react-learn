// eslint-disable-next-line no-unused-vars
import React from 'react';
import EmptyList from './EmptyList';
import List from './List';
// import List from './List';

const ListGroup = (props) => {

 


  return (
    <div>
      <EmptyList />
      {/* <List job="web developer" isDone={true} /> */}
      {
        props.tasks.map((task) => (
          <List key={task.id} id={task.id} job={task.job} checklist={props.checklist} isDone={task.isDone} deletetask={props.deletetask} />
        
        ))
      }
      {/* <List job="backend developer" isDone={false} />
      <List job="pass interview" isDone={false} /> */}
      {/* {
        tasks.map( (task) => (
          <div className={ ` ${task.isDone && " opacity-50 scale-75 text-green-500"} border bg-gray-300 border-gray-300 mb-3 p-2`} key={task.id}> 
             <p>
            {task.id} | {task.isDone ? "done" : "not yet"}
          </p>
          <p>{task.job}</p>
          </div>
        ))
      }  */}
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
         