import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
