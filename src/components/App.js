import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");
  

  function handleDelete(taskId) {
    setTasks(tasks.filter((_,index) => index !== taskId));
  }
  function handleCategoryChange(category) {
    setFilteredCategory(category);
  }

  function handleNewTaskSubmit(newTask) {
    if (newTask.text === "") return;
    setTasks([...tasks, newTask]);
     
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={filteredCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}        
        onTaskFormSubmit={handleNewTaskSubmit}
      />
      <TaskList
        tasks={tasks.filter(task => filteredCategory === "All" || task.category === filteredCategory)}
        onDelete={handleDelete}
         />
    </div>
  );
}

export default App;
