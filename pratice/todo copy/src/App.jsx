import React, { useState } from "react";
import Listgroup from "./Listgroup";
import Heading from "./Heading";
import Liststatus from "./Liststatus";
import Createform from "./Createform";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      job: "focus on your code",
      isDone: false,
    },
    {
      id: 2,
      job: "reduce your time to use phone",
      isDone: true,
    },
    {
      id: 3,
      job: "Finish project report",
      isDone: false,
    },
  ]);
  const checklist = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id == id) {
          task.isDone = !task.isDone;
          return task;
        }
        return task;
      })
    );
  };

  const createlist = (newjob) => {
    console.log(newjob, "This is app");
    const job = {
      id: Math.random() * Math.random(),
      job: newjob,
      isDone: false,
    };
    setTask([...tasks, job]);
  };
    
    const editlist = (id, editjob) => {
        console.log(id,editjob,"this is app")
        setTask(tasks.map((task) => {
            if (task.id == id) {
                task.job = editjob
            }
            return task;
        }
         
        ));
    }

    const deletelist = (id) => {
        console.log(id,"this is app delete list")
   setTask(tasks.filter( (task) => task.id != id ))
    }

    

  return (
    <>
      <div className="bg-white w-[450px] mx-auto mt-10 p-10">
        <Heading text="Todo" />
        <Createform createlist={createlist} />
        <Liststatus tasks={tasks} />
        <div id="listGroup">
          <Listgroup tasks={tasks} checklist={checklist} editlist = {editlist} deletelist = {deletelist} />
        </div>
      </div>
    </>
  );
};

export default App;
