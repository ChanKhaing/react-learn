import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComponent = () => {
  return (
    // <nav>
    //   <ol className=' flex no-underline space-x-5'>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/about"> About</NavLink>
    //     </li>
    //     <li>
    //      4 <NavLink to="/contact">Contact</NavLink>
    //     </li>
    //   </ol>
    // </nav>
    <nav>
      <ol className="flex space-x-5 no-underline text-blue-600">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* data transfer using state  */}
          <NavLink to="about" state={{phone:123456}}>About</NavLink>
        </li>
        <li>
          {/* <NavLink replace={true} to="contact">
            Contact
          </NavLink> */}
          <NavLink  to="contact">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="page/2">Page</NavLink>
        </li>

        {/* <li>
          <NavLink to="/book">Book</NavLink>
        </li>
        <li>
          <NavLink to={`/book/${Math.random(10)}`}>DetailBook</NavLink>
        </li> */}
      </ol>
    </nav>
  );
}

export default NavComponent