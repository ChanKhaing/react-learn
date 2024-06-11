import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {
  const {state:{phone}} = useLocation();
  console.log(phone);
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage