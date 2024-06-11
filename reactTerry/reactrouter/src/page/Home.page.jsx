import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const HomePage = () => {
  
  const [text, setText] = useState("");
  const nav = useNavigate();
  const handleDataTransfer = (e) => { 
    e.preventDefault();
    console.log(text+"this is console from home");
    nav("/contact",{state:{name:text}});
    setText("");
  };

  const handleToContact = () => {}
  return (
    <div>
      <p>Home page</p>
      <Link to={"/contact"}>
        <button
          className="p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200"
          onClick={handleToContact}
        >
          Next to Contact
        </button>
      </Link>
      <form className="flex flex-col w-[300px]">
        <label htmlFor="name">name</label>
        <input
          className=" border-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="name"
          id="name"
        />
        <button
          className="p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200"
          onClick={handleDataTransfer}
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default HomePage