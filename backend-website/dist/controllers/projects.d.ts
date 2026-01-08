import type { Request, Response } from "express";
declare function getProjects(req: Request, res: Response): Promise<void>;
declare function getProjectById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export { getProjects, getProjectById };
//# sourceMappingURL=projects.d.ts.map