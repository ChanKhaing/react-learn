import React, { createContext, useState } from 'react'


export const shop = createContext();

const ShopProvider = ({ children }) => {
    const [num, setnum] = useState(10);
    const increase = () => setnum(num + 1);
    const decrease = () => setnum(num - 1);
  return (
      <shop.Provider value={{num,increase,decrease}}>
          {children}
    </shop.Provider>
  )
}

export default ShopProvider