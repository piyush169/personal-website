import { Router } from "express";
import { getProjects, getProjectById ,createProject } from "../controllers/projects.js";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);

export default router;