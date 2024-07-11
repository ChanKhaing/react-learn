import React, { useContext } from "react";
import { Justaname } from "../context/ContextProvider";
import { shop } from "../context/ShopProvider";
// import { CounterContext } from "../context/CounterProvider";

const Counter = () => {
  // const { edit } = useContext(Justaname);
  const {num} = useContext(shop);
  console.log(num);
  return <h1>{num}</h1>;
};

export default Counter;
