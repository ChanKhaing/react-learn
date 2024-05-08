// eslint-disable-next-line no-unused-vars
import React from "react";
// import emptySvg from "./assets/empty.svg"
import Heading from "./Heading";
import ListCreateForm from './ListCreateForm';
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";


const App = () => {
  return (
    <div className="bg-white w-[450px] mx-auto mt-10 p-10">
      <Heading />
      <ListCreateForm />
      <ListStatus />
      <ListGroup/>

    

      {/* <button id="checkAll" class="bg-zinc-700 text-zinc-50 p-4">Check All</button> */}
    </div>
  );
}

export default App