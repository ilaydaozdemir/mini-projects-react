import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClickEditing() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonCapture = "Edit";

  if (isEditing) {
    playerName = <input type="text" required />;
    buttonCapture = "Save";
  }

  return (
    <li>
      <span className="palyer">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEditing}>{buttonCapture}</button>
    </li>
  );
}
