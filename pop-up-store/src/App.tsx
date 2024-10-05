import React, { useState } from "react";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";

import "./components/Popup/data";
function App() {
  // Popup'ı açıp kapatmak için state
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const PopupInfoData = [
    {
      id: 1,
      className: "Success",
      icon: "s-icon",
      title: "SUCCESS",
      describtion: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      className: "Error",
      icon: "e-icon",
      title: "ERROR",
      describtion: "Something went wrong, please try again later.",
    },
    {
      id: 3,
      className: "Warning",
      icon: "w-icon",
      title: "WARNING",
      describtion: "Be cautious, this action might have consequences.",
    },
    {
      id: 4,
      className: "Info",
      icon: "i-icon",
      title: "INFO",
      describtion: "Here is some useful information for you.",
    },
  ];

  return (
    <div className="App">
      <Header onClick={showPopup} />

      {/* Popup bileşenini sadece isPopupVisible true olduğunda göster */}
      {isPopupVisible && (
        <Popup
          id={1}
          className="popup"
          icon="✔"
          title="SUCCESS"
          describtion="Operation completed successfully."
          onClick={closePopup}
        />
      )}
    </div>
  );
}

export default App;
