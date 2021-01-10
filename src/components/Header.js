import React from "react";
import logo from "../logo.jpeg";
console.log(logo);
const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
