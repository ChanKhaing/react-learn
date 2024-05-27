import React, { createContext, useState } from 'react'

export const GeneralContext = createContext();
 

const GeneralProvider = ({ children }) => {
    // const [chan, setchan] = useState('chankhine')
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleDrawer = () => {
      setDrawerOpen(!isDrawerOpen);
    };
  return (
      <GeneralContext.Provider value={{handleDrawer,isDrawerOpen}}>
          {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider