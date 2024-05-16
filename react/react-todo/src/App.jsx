// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import emptySvg from "./assets/empty.svg"
import Heading from "./Heading";
import { Toaster } from "react-hot-toast";
import ListCreateForm from './ListCreateForm';
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";


const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, job: "Complete homework", isDone: false },
    { id: 2, job: "Do laundry", isDone: false },
    { id: 3, job: "Buy groceries", isDone: false },
    { id: 4, job: "Clean the house", isDone: false },
    { id: 5, job: "Exercise", isDone: false },
   
  ]);
  //  const tasks = [
  //    { id: 1, job: "Complete homework", isDone: false },
  //    { id: 2, job: "Do laundry", isDone: true },
  //    { id: 3, job: "Buy groceries", isDone: false },
  //    { id: 4, job: "Clean the house", isDone: false },
  //    { id: 5, job: "Exercise", isDone: false },
  //    { id: 6, job: "Read a book", isDone: false },
  //    { id: 7, job: "Cook dinner", isDone: true },
  //  ];
  
  const createlist = (job) => {
    const newtask = {
      id:  Math.random() * Math.random(),
      job: job,
      isDone: false,
    };
    setTask([...tasks, newtask]);
    // console.table(arr);
    
  }

  const checklist = (id) => {
   setTask(
     tasks.map((task) => {
       if (id === task.id) {
         // console.log("check",id)
         task.isDone = !task.isDone;
         // console.log(task.isDone,id)
       }
       return task;
     })
   );
  }

  const editlist = (newjob,id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          
          task.job = newjob;
          // console.log(task.isDone,id)
        }
        return task;
      })
    );
  };

  const list = (id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          // console.log("check",id)
          task.isDone = !task.isDone;
          // console.log(task.isDone,id)
        }
        return task;
      })
    );
  };

  const deletetask = (id) => {
    setTask(tasks.filter((task) => id !== task.id));
  }
      
  

  return (
    <div className="bg-white w-[450px] mx-auto mt-10 p-10">
      <Heading text="Todo app Chan" />
      <ListCreateForm createlist={createlist} />
      <ListStatus tasks={tasks} />
      <ListGroup
        checklist={checklist}
        tasks={tasks}
        deletetask={deletetask}
        editlist={editlist}
      />

      {/* <button id="checkAll" class="bg-zinc-700 text-zinc-50 p-4">Check All</button> */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App