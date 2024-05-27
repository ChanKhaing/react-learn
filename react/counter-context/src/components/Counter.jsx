import React, { useContext } from "react";
import { Justaname } from "../context/ContextProvider";
// import { CounterContext } from "../context/CounterProvider";

const Counter = () => {
  const {edit} = useContext(Justaname);
  return <h1>{edit}</h1>;
};

export default Counter;
