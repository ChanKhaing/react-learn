import React, { useState } from "react";
import Listgroup from "./Listgroup";
import Heading from "./Heading";
import Liststatus from "./Liststatus";
import Createform from "./Createform";
import Createpage from "./Createpage";
import TaskProvider from "./context/TaskProvider";
import Counter from "./components/Counter";

const App = () => {
  
    

  return (
    <>
      <div className="bg-white w-[450px] mx-auto mt-10 p-10">
        <TaskProvider>
          <Heading text="Todo" />
          <Createpage  />
          <Listgroup  />
        </TaskProvider>
     
       
      </div>
      {/* <Counter/> */}
    </>
  );
};

export default App;
