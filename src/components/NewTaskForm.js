import React,{useState} from "react";
import { TASKS } from "../data";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({ text: "", category: "Code" });
  
  function handleNewTaskChange(event) {
    const { name, value } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (newTask.text === "") return;
    onTaskFormSubmit(newTask);
    setNewTask({ text: "", category: "Code" });

  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleNewTaskChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleNewTaskChange}>
          {/* render <option> elements for each category here except the all category */}
          {categories.map((category) => (
            category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
