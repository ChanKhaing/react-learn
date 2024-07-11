import React, { useState } from "react";

// import CounterProvider from "./context/CounterProvider";
import Counter from './components/Counter';
import Add from './components/Add';
import Sub from './components/Sub';
import ContextProvider from "./context/ContextProvider";
import ShopProvider from "./context/ShopProvider";
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
      <ShopProvider>
        <Counter />
        <Sub />
        <Add />
      </ShopProvider>
    </ContextProvider>
  );
};

export default App;
