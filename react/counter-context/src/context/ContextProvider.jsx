import React, { useState } from 'react'
import { createContext } from 'react'

export const Justaname = createContext();
const ContextProvider = ({ children }) => {
    const [edit, setedit] = useState(0);
    const increment = () => setedit(edit + 1);
    const decrement = () => setedit(edit - 1);
  return (
      <Justaname.Provider value={{edit , increment , decrement}} >
          {children}
    </Justaname.Provider>
  )
}

export default ContextProvider