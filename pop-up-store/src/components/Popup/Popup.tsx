import React, { useState } from "react";
import "./Popup.scss";

export type PopupProps = {
  id: number;
  className: string;
  icon: string;
  title: string;
  describtion: string;
  onClick: () => void;
};
const Popup = (props: PopupProps) => {
  const handleClose = () => {
    props.onClick(); // Parent'tan gelen kapatma fonksiyonu
  };

  return (
    <div className="popup-inner-container">
      <div className={props.className}>
        <div className="popup-header">
          <div className="popup-title">
            <i className="icon">{props.icon}</i>
            <span className="title">{props.title}</span>
          </div>
          <button className="close-button" onClick={handleClose}>
            <i>x</i>
          </button>
        </div>
        <hr />
        <div className="popup-description">{props.describtion}</div>
      </div>
    </div>
  );
};
export default Popup;
