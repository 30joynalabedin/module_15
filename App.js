import React, { useState } from 'react';
import './App.css';

const TodoListApp = () => {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTaskList([...taskList, taskInput]);
      setTaskInput('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleTaskInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TodoListApp;
