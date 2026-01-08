import { Router } from "express";
import { getBlogs, getBlogById } from "../controllers/blogs.js";
const router = Router();
router.get("/", getBlogs);
router.get("/:id", getBlogById);
export default router;
//# sourceMappingURL=blogs.js.map