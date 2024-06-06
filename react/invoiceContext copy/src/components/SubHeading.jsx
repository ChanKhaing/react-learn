import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralProvider'

const SubHeading = ({ children }) => {
   const obj = useContext(GeneralContext);
  console.log(obj);
  return (
   
      <h3 className=' texl-lg  font-sans text-gray-600'> {children} </h3>
  )
}

export default SubHeading