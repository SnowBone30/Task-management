// controllers/taskController.js
const { tasks } = require("../models/taskModel");

// Get all Tasks
const getAllTasks = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Tasks retrieved successfully", data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Get the Status you only need
const getAlltitleBystatus = (req, res) => {
  const status = req.params.status;
  const filteredStatus = tasks.filter((task) => task.status === status);

  if (filteredStatus.length === 0) {
    res.status(404).json({ message: "Status Unknown!!!" });
  } else {
    res.json(filteredStatus);
  }
};

// Add a new Task
const addTask = async (req, res) => {
  try {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json({ message: "Task added successfully", data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing Task
const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...req.body };
      res
        .status(200)
        .json({ message: "Task updated successfully", data: tasks });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      res
        .status(200)
        .json({ message: "Task deleted successfully", data: tasks });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getAlltitleBystatus,
  addTask,
  updateTask,
  deleteTask,
};