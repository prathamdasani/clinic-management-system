import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <ul className='text-2xl flex space-x-16 justify-center py-12'>
          <div className='hover:text-3xl'>
          <NavLink to="/" ><strong >Home</strong> </NavLink>
          </div>
          <div className='hover:text-3xl'>
          <NavLink to="/About" ><strong >About Us </strong> </NavLink>
          </div>
            <div  className='hover:text-3xl'>
            <NavLink to="/Contact" ><strong>Contact Us</strong> </NavLink>
            </div>
        </ul>
    </nav>
  )
}
export default Navbar;