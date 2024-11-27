import { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState(" ");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() !== "") {
      // Boşluk kontrolü
      onAdd(enteredTask);
      setEnteredTask(""); // Boş string olarak ayarlayın
    }
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
export default NewTask;
