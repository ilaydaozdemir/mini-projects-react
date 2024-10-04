import React from "react";
import "./Popup.scss";
const Popup = () => {
  return (
    <div className="popup-container">
      <div className="popup-inner-container">
        <div className="popup-header">
          <div className="popup-title">
            <i className="icon">icon</i>
            <span className="title">Title</span>
          </div>
          <button className="close-button">
            <i>icon x</i>
          </button>
        </div>
        <hr />
        <div className="popup-description">description</div>
      </div>
    </div>
  );
};
export default Popup;
