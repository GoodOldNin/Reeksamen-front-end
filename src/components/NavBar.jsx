import "../styles/navBar.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (loggedIn === "") {
      let userNameLS = localStorage.getItem("userName");
      let loggedInLS = localStorage.getItem("loggedIn");
      let userRoleLS = JSON.parse(localStorage.getItem("userRole"));

      setUserName(userNameLS);
      setLoggedIn(loggedInLS);
      setUserRole(userRoleLS);
    }
  });

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Test">Test</Link>
        <Link to="/Test">Sorted</Link>
        {loggedIn && <Link to="/Lists">Lists</Link>}
        {!loggedIn && <Link to="/SignUp">Sign Up</Link>}
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
