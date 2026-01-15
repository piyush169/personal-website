import { Router } from "express";
import { getBlogs, getBlogById, syncBlog } from "../controllers/blogs.js";

const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", syncBlog);

export default router;
