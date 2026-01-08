import type { Request, Response } from "express";
import prisma from "../db/index.js";

async function getProjects(req: Request, res: Response) {
    try{
        const projects = await prisma.project.findMany({
            select: {
                id:true,
                title:true,
                techStack:true,
                liveUrl:true,
            }
        });
        res.status(200).json(projects);
    }
    catch(error){
        res.status(500).json({error: "Unable to fetch projects"});
    }
}

async function getProjectById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({error: "Project ID is required"});
    }
    try{
        const project = await prisma.project.findUnique({
            where: {id}
        });
        if(!project){
            return  res.status(404).json({error: "Project not found"});
        }
        res.status(200).json(project);
    }
    catch(error){
        res.status(500).json({error: "Unable to fetch project"});
    }
}

export { getProjects, getProjectById };