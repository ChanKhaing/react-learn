import React from "react";
import emptySvg from "./assets/empty.svg"

const App = () => {
  return (
<div className="bg-white w-[450px] mx-auto mt-10 p-10">
  <h1 className="text-3xl font-bold mb-5 font-heading">List Builder App</h1>
  <div className="flex mb-5">
    <input type="text" id="textInput" className="border-2 border-zinc-700 focus-visible:outline-none flex-grow px-3" />
    <button id="addBtn" className="bg-zinc-700 text-zinc-50 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  </div>
  <div className="flex justify-between items-center mb-5">
    <p className="font-heading">Your Lists</p>
    <p className="bg-zinc-700 text-zinc-50 text-xs px-3 py-2 rounded-full">
      Done (
      <span id="doneCount">0</span>/<span id="totalCount">0</span>
      )
    </p>
  </div>
  <div id="listGroup">
    <div className="empty-stage py-5 hidden last:flex justify-center flex-col items-center gap-3">
      <img width={100} src={emptySvg} alt />
      <p>There is no List</p>
    </div>
  </div>
  {/* <button id="checkAll" class="bg-zinc-700 text-zinc-50 p-4">Check All</button> */}
</div>
 )
}

export default App