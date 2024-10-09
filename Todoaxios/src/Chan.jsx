// eslint-disable-next-line no-unused-vars
import React from "react";

const Chan = () => {
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
   {
  tasks.map((task) => (
    <div key={task.id}>
      <p>{task.job}</p>
    </div>
  ))
}
    </div>
  );
};

export default Chan;




//    {
//      tasks.map((task) => (
//        <div key={task.id}>
//          <p>
//            {task.id} | {task.isDone ? "done" : "not yet"}
//          </p>
//          <p>{task.job}</p>
//        </div>
//      ));
//    }