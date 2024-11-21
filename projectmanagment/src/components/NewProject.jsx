import Input from "./Input";

function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="description" textArea />
        <Input label="Due date" />
      </div>
    </div>
  );
}
export default NewProject;
