import React from 'react'
// import Chan from './Chan';
import Tablelist from './Tablelist';
import Selectlist from './Selectlist';


const App = () => {
  return (
    <div className=" p-10">
      <h3 className=" mb-10 ">hello world app</h3>
      <div className=" border border-neutral-600 p-5 grid grid-cols-3  gap-2">
        <Selectlist  />
        <Selectlist />
        <Selectlist />
      </div>
      <Tablelist />
    </div>
  );
}

export default App