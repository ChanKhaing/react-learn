import React from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { ReactDOM } from 'react-dom/client';
const ContactPage = () => {
  const nav = useNavigate();
  const handleToBack = () => {
     nav(-1)
  }
  const { state,pathname,search } = useLocation();
  
  // const {state:{name}} = useLocation();
  console.log(state?.name);
  console.log(`search is ${search}`)
  console.log(pathname + "url");
  return (
    <div>
      <p>Contact</p>

        <button
          className="p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200"
          onClick={handleToBack}
        >
         Back
        </button>
      
    </div>
  );
}

export default ContactPage