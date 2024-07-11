import React, { useContext, useState } from "react";
import { Justaname } from "../context/ContextProvider";
import { shop } from "../context/ShopProvider";

// import { CounterContext } from "../context/CounterProvider";

const Add = () => {


  // const {increment} = useContext(Justaname);
  const { increase } = useContext(shop);

 
 
  return <button onClick={increase} >Add</button>;
};

export default Add;
