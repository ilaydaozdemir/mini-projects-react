import React from "react";
import "./Header.scss";

export type headerProps = {
  onClick: () => void;
};
const Header = (props: headerProps) => {
  return (
    <div className="header-container">
      <header>
        <h1>WELCOME TO POPUP GENERATOR</h1>
        <p>Generate random popups</p>
        <button className="glow-on-hover" type="button" onClick={props.onClick}>
          HOVER ME, THEN CLICK ME!
        </button>
      </header>
    </div>
  );
};
export default Header;
