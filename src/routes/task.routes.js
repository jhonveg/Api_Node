import { Router } from "express";
import { authrequired } from "../middlewares/validatetoken.js";
import { gettasks, createtask, gettask, deletetask, updatetask } from "../controllers/task.controller.js";

const router = Router();

router.get('/tasks', authrequired, gettasks);
router.post('/tasks', authrequired, createtask);
router.get('/tasks/:id', authrequired, gettask);
router.delete('/tasks/:id', authrequired, deletetask);
router.put('/tasks/:id', authrequired, updatetask);

export default router;