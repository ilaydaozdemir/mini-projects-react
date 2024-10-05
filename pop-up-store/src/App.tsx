import React, { useState } from "react";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import Editor from "./components/Editor/Editor";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<any | null>(null);

  const popupData = [
    {
      id: 1,
      className: "success",
      icon: "✔",
      title: "Success",
      describtion: "Operation completed successfully.",
    },
    {
      id: 2,
      className: "error",
      icon: "✘",
      title: "Error",
      describtion: "An error has occurred.",
    },
    {
      id: 3,
      className: "warning",
      icon: "⚠",
      title: "Warning",
      describtion: "Please proceed with caution.",
    },
    {
      id: 4,
      className: "info",
      icon: "ℹ",
      title: "Information",
      describtion: "This is an informational message.",
    },
  ];
  const showRandomPopup = () => {
    const randomIndex = Math.floor(Math.random() * popupData.length);
    const randomPopup = popupData[randomIndex];

    if (randomPopup !== currentPopup) {
      setCurrentPopup(randomPopup);
      setIsPopupVisible(true);
    }
  };
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="App">
      <Header onClick={showRandomPopup} />
      <Editor />
      {isPopupVisible && currentPopup && (
        <Popup
          id={currentPopup.id}
          className={currentPopup.className}
          icon={currentPopup.icon}
          title={currentPopup.title}
          describtion={currentPopup.describtion}
          onClick={closePopup}
        />
      )}
    </div>
  );
}

export default App;
