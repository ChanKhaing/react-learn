import React from "react";
import Empty from "./Empty";
import List from "./List";


const Listgroup = (props) => {
  return (
    //documentfragment
    <>
      <Empty />
      {props.tasks.map((task) => (
          <List key={task.id} job={task.job} id={task.id} isDone={task.isDone} deletelist={props.deletelist} checklist={props.checklist} editlist={props.editlist} />
      ))}
    </>
  );
};

export default Listgroup;
