import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-container">
      <header>
        <h1>WELCOME TO POPUP GENERATOR</h1>
        <p>Generate random popups</p>
        <button className="glow-on-hover" type="button">
          HOVER ME, THEN CLICK ME!
        </button>
      </header>
    </div>
  );
};
export default Header;
