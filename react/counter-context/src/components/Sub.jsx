import React, { useContext } from "react";
import { Justaname } from "../context/ContextProvider";
import { shop } from "../context/ShopProvider";
// import { CounterContext } from "../context/CounterProvider";

const Sub = () => {
  const {decrease} = useContext(shop);
   const {decrement} = useContext(Justaname)
  return <button onClick={decrease}>Sub</button>;
};

export default Sub;
