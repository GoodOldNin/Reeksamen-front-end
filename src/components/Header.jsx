import React from "react";
import backgroundimg from "../images/headerImage.png";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <h1>Rental web app</h1>
    </header>
  );
};

export default Header;
