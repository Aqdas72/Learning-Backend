import {Router} from "express";
import { getAllTasks, getTaskById, updateTask, deleteTask, addTask, taskCompleted } from "../controller/task.controller.js";
import { validateSession } from "../middleware/session.middleware.js";

const router = Router();

// have to go through middleware to check if login or not

router.post("/",validateSession, addTask);
router.get("/",validateSession, getAllTasks);
router.get("/:id",validateSession, getTaskById);
router.put("/:id",validateSession, updateTask);
//mark task completed
router.patch("/:id",validateSession,taskCompleted);
router.delete("/:id",validateSession, deleteTask);

export default router;