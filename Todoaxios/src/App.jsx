import React, { useState } from "react";
// import emptySvg from "./assets/empty.svg"
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

const App = () => {
const [tasks, setTask] = useState( [
     { id: 1, job: "Complete homework", isDone: false },
     { id: 2, job: "Do laundry", isDone: true },
     { id: 3, job: "Buy groceries", isDone: false },
     { id: 4, job: "Clean the house", isDone: false },
     { id: 5, job: "Exercise", isDone: false },
     { id: 6, job: "Read a book", isDone: false },
     { id: 7, job: "Cook dinner", isDone: true },
   ]);


  // const createlist = (job) => {
  //   const newtask = {
  //     id: 1,
  //     job: job,
  //     isDone: false,
  //   };
  //   // setTask([...tasks, newtask]);
  //   console.table(arr);

  // }

  // const tasks =    [
  //    { id: 1, job: "Complete homework", isDone: false },
  //    { id: 2, job: "Do laundry", isDone: true },
  //    { id: 3, job: "Buy groceries", isDone: false },
  //    { id: 4, job: "Clean the house", isDone: false },
  //    { id: 5, job: "Exercise", isDone: false },
  //    { id: 6, job: "Read a book", isDone: false },
  //    { id: 7, job: "Cook dinner", isDone: true },
  //  ]

  return (
    <div className="bg-white w-[450px] mx-auto mt-10 p-10">
      <Heading text="Todo app Chan" />
      <ListCreateForm />
      <ListStatus />
      <ListGroup tasks={tasks} />

      {/* <button id="checkAll" class="bg-zinc-700 text-zinc-50 p-4">Check All</button> */}
    </div>
  );
};

export default App;
