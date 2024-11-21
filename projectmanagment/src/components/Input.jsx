function Input({ textArea, label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textArea ? <textarea {...props} /> : <input />}
    </p>
  );
}
export default Input;
