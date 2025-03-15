const express = require("express");
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require("../controllers/task.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const taskRouter = express.Router();

taskRouter.post("/", authMiddleware, createTask);
taskRouter.get("/", authMiddleware, getTasks);
taskRouter.get("/:id", authMiddleware, getTaskById);
taskRouter.put("/:id", authMiddleware, updateTask);
taskRouter.delete("/:id", authMiddleware, deleteTask);

module.exports = taskRouter;