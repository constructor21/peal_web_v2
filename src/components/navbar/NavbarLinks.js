import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'> Create Campaign </NavLink></li>
        <li><NavLink to='/'> Locations </NavLink></li>
        <li><NavLink to='/'> Dashboard </NavLink></li>
        <li><NavLink to='/'> Log Out </NavLink></li>
      </ul>
    </div>
  )
}

export default NavbarLinks;
