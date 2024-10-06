import React, { useState } from "react";
import Heading from "./Heading";
import Createform from "./Createform";
import Liststatus from "./Liststatus";
import Listgrouphandler from "./Listgrouphandler";

const App = () => {

    const [tasks, settask] = useState([
      { id: 1, job: "Complete homework", isDone: false },
      { id: 2, job: "Do laundry", isDone: false },
      { id: 3, job: "Buy groceries", isDone: true },
      { id: 4, job: "Coding", isDone: true },
    ]);
    const  createlist = (newjob) => {
       const newtask = {
           id: Math.random() * Math.random(),
           job: newjob,
           isDone: false
                
       }
        settask([...tasks,newtask])
    }

    // const edittask = (editjob,id) => {
    //    settask(
    //      tasks.map((task) => {
    //        if (id === task.id) {
    //          // console.log("check",id)
    //            task.job = editjob;
    //          // console.log(task.isDone,id)
    //        }
    //        return task;
    //      })
    //    );
  // }
  
  let edittask = (editjob, id) => {
    tasks.map((task) => {
      if (id === task.id) {
        task.job = editjob
      }
    
    })
  }

  

    const checktask = (id) => {
   settask(
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

    const deletetask = (id) => {
        if (confirm("Are you sure to delete")) {
       settask(tasks.filter( (task) => (task.id !== id)))
   }
    }


  return (
    <div className="bg-white w-[450px] mx-auto mt-10 p-10">
      <Heading text="Todo" />
     <Createform createlist={createlist} />
      <Liststatus tasks={tasks} />
      <Listgrouphandler  tasks={tasks} deletetask={deletetask} edittask={edittask} checktask={checktask}  />
    </div>
  );
};

export default App;
