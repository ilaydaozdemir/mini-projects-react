import { useState } from "react";

export default function Player({ initalName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleClickEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editableName = <span className="player-name">{playerName}</span>;
  let buttonCapture = "Edit";

  if (isEditing) {
    editableName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonCapture = "Save";
  }

  return (
    <li>
      <span className="palyer">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEditing}>{buttonCapture}</button>
    </li>
  );
}
