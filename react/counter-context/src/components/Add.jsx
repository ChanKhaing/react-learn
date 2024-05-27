import React, { useContext, useState } from "react";
import { Justaname } from "../context/ContextProvider";

// import { CounterContext } from "../context/CounterProvider";

const Add = () => {


  const {increment} = useContext(Justaname);
 
 
  return <button onClick={increment}>Add</button>;
};

export default Add;
