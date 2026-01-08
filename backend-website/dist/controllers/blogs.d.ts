import type { Request, Response } from "express";
declare function getBlogs(req: Request, res: Response): Promise<void>;
declare function getBlogById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export { getBlogs, getBlogById };
//# sourceMappingURL=blogs.d.ts.map