import { Router } from "express";
import {authMiddleware} from "../middleware/auth.middleware.js"
import { createTask, deleteTask, getAllTask, updateTask } from "../controller/task.controller.js";

const router = Router();

//authMiddleware checks if the user is login or not
router.get("/",authMiddleware,getAllTask);
router.post("/",authMiddleware,createTask);
router.put("/:id",authMiddleware,updateTask);
router.delete("/:id",authMiddleware,deleteTask);

export default router;

