import React from 'react'
import Navigator from './Navigator'
import Cardchan from './Cardchan';
// import Accordion from './Accordion';



const App = () => {
  return (
    <div>
      <h1 className=" p-5 m-5 ">Hello shadcn ui testing</h1>

      <div className=' flex m-5'>
              <Navigator />
              {/* <Accordion/> */}
          </div>
          <Cardchan/>
    </div>
  );
}

export default App