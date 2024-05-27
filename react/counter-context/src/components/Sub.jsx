import React, { useContext } from "react";
import { Justaname } from "../context/ContextProvider";
// import { CounterContext } from "../context/CounterProvider";

const Sub = () => {
  
   const {decrement} = useContext(Justaname)
  return <button onClick={decrement}>Sub</button>;
};

export default Sub;
