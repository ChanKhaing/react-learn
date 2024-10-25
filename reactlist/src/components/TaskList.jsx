import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";
import useTaskstore from "../Store/useTaskstore";

const TaskList = () => {
  // const { tasks } = useContext(TaskContext);
  const { tasks } = useTaskstore();

  return (
    <div>
      <h3 className=" font-bold font-serif text-xl mb-3">
        Task List (Total {tasks.length}, Done{" "}
        {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task key={el.id} job={el} />
      ))}
    </div>
  );
};

export default TaskList;
