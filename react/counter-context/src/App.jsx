import React, { useState } from "react";

// import CounterProvider from "./context/CounterProvider";
import Counter from './components/Counter';
import Add from './components/Add';
import Sub from './components/Sub';
import ContextProvider from "./context/ContextProvider";
const App = () => {
  
  // const [count, setcount] = useState(0);

  // const add = () => {
  //   setcount(count + 1)
  // }

  // const sub = () => {
  //   setcount(count - 1)
  // }

  return (
    <ContextProvider>
      <Counter  />
      <Sub  />
      <Add  />
    </ContextProvider>
  );
};

export default App;
