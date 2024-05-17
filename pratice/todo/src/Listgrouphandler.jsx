import React from 'react'
import Emptylist from './Emptylist';
import List from './List';

const Listgrouphandler = (props) => {

  
  
  return (
    <div>
      <Emptylist />
      
      {
        props.tasks.map((task) => (
          <List key={task.id} id={task.id} job={task.job} isDone={task.isDone} checktask={props.checktask} deletetask = {props.deletetask} edittask = {props.edittask} />
        ))
     }
     
      {/* {tasks.map((task) => (
        // <List job={task.job} isDone={task.isDone} />
        <div>{task.job}</div>
      ))} */}
    </div>
  );
}

export default Listgrouphandler