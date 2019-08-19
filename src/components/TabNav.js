import React from "react";
import { NavLink } from "react-router-dom";

const TabNav = () => {
    return (
      <nav className="navbar">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/characters"> Characters</NavLink>
        <NavLink to="/locations"> Locations</NavLink>
        <NavLink to="/episodes"> Episodes</NavLink>
      </nav>
    )
  }
  
  export default TabNav
    
