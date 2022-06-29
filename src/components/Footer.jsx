import React from "react";
import LogOut from "./LogOut";
import { useState, useEffect } from "react";
import "../styles/footer.css";

const Footer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (loggedIn === false) {
      let userNameLS = localStorage.getItem("userName");
      let loggedInLS = localStorage.getItem("loggedIn");
      let userRoleLS = JSON.parse(localStorage.getItem("userRole"));

      setUserName(userNameLS);
      setLoggedIn(loggedInLS);
      setUserRole(userRoleLS);
    }
  });

  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <footer>
      {loggedIn ? (
        <div>
          Logged in as {userName} role: {userRole}{" "}
          <LogOut onClick={logOutFunc} />
        </div>
      ) : (
        <div>Please log in, or sign up</div>
      )}
    </footer>
  );
};

export default Footer;
