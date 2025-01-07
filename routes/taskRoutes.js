const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getAlltitleBystatus,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Route definitions
router.get("/", getAllTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/:status", getAlltitleBystatus);

module.exports = router;