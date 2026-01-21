import type { Request, Response } from "express";
import prisma from "../db/index.js";

interface ProjectRequestBody {
  notionId: string;
  title: string;
  description?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

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
    try{
        const project = await prisma.project.findUnique({
            where: {id: String(id)}
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

async function createProject(req: Request<{}, {}, ProjectRequestBody>, res: Response) {
    try {
        const body = req.body;
        
        const data = {
            title: body.title,
            description: body.description || null,
            techStack: body.techStack,
            image: body.image || null,
            liveUrl: body.liveUrl || null,
            githubUrl: body.githubUrl || null,
            notionId: body.notionId 
        };

        const project = await prisma.project.upsert({
            where: { notionId: body.notionId }, 
            update: data,
            create: {
                id: body.notionId, 
                ...data
            }
        });

        res.status(201).json({ success: true, project });
    } catch (err) {
        res.status(500).json({ error: "fail_upsert_project" });
    }
}

export { getProjects, getProjectById, createProject };