import React from 'react'
import Emptylist from './Emptylist';
import List from './List';
import Listtest from './Listtest';
const Listgrouphandler = (props) => {

  
  
  return (
    <div>
      {/* <Emptylist /> */}
      
      {/* {
        props.tasks.map((task) => (
          <List key={task.id} id={task.id} job={task.job} isDone={task.isDone} checktask={props.checktask} deletetask = {props.deletetask} edittask = {props.edittask} />
        ))
     } */}
      
      {
        props.tasks.map((task) => (
          <Listtest
            key={task.id}
            task={task}
            id={task.id}
            job={task.job}
            isDone={task.isDone}
            checktask={props.checktask}
            deletetask={props.deletetask}
            edittask={props.edittask}
          />
        ))
        }
      
      {
        console.log(props)
     }
      {/* {
        props.tasks.map((e) => 
          <Listtest key={e.id} task={e} />
        )
   } */}
     
      {/* {props.tasks.map((e) => (
        // <List job={task.job} isDone={task.isDone} />
        <div>{e.job}</div>
      ))} */}
    </div>
  );
}

export default Listgrouphandler