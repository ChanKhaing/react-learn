import React, { useEffect } from 'react'
import Counter from './Counter';
import HideShow from './HideShow';

const App = () => {

  // useEffect(() => {
  //   console.log("useEffect is working now")
  // }, []);
  return (
    <div>
      {/* <Counter/> */}
      <HideShow/>
    </div>
  )
}

export default App