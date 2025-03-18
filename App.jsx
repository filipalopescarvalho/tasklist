import React, { useState, useEffect } from "react";
import "./App.css";

const categories = ["Personal", "Work", "Home"];

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saeAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, category, isComplete: false }]);
      setInputValue("");
    }
  }
});
  
  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const handleToggleComplete = (indexToToggle) => {
    setTasks(
      tasks.map((task, index) =>
        index === indexToToggle
          ? { ...task, isComplete: !task.isComplete }
          : task
      )
    );
  };

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCategoryFilterChange = (e) => setCategoryFilter(e.target.value);
  const handleSearch = () => setSearchFilter(filter);

  const filteredTasks = tasks
    .filter((task) =>
      task.text.toLowerCase().includes(searchFilter.toLowerCase()) &&
      (categoryFilter ? task.category === categoryFilter : true)
    )
    .sort((a, b) => a.text.localeCompare(b.text));

  return (
    <div className="card">
      <h1>Hello!</h1>
      <p>Welcome to your Task List</p>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask}>Create Task</button>
      </div>
      <hr />
      <div className="form-group">
        <input
          type="text"
          placeholder="Filter tasks..."
          value={filter}
          onChange={handleFilterChange}
        />
        <select value={categoryFilter} onChange={handleCategoryFilterChange}>
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <hr />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => handleToggleComplete(index)}
            />
            <span>
              {task.text} - {task.category}
            </span>
            <button onClick={() => handleRemoveTask(index)}>✕</button>
          </li>
        ))}
      </ul>
      </div>
    );
  
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };   
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, category, isComplete: false }]);
      setInputValue("");
    }
  };

  return (
    <div className="card">
      <h1>Hello!</h1>
      <p>Welcome to your Task List</p>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask}>Create Task</button>
      </div>
      <hr />
      <div className="form-group">
        <input
          type="text"
          placeholder="Filter tasks..."
          value={filter}
          onChange={handleFilterChange}
        />
        <select value={categoryFilter} onChange={handleCategoryFilterChange}>
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <hr />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => handleToggleComplete(index)}
            />
            <span>
              {task.text} - {task.category}
            </span>
            <button onClick={() => handleRemoveTask(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );


export default App;