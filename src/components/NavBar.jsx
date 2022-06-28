import "../styles/navBar.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>&#160;&#160;&#160;
        <Link to="/SignUp">Sign Up</Link>&#160;&#160;&#160;
        <Link to="/Hihi">List</Link>&#160;&#160;&#160;
        <Link to="/Hihi">Sorted</Link>&#160;&#160;&#160;
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
