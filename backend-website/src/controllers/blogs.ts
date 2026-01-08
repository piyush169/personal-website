import type { Request, Response } from "express";
import prisma from "../db/index.js";
import { create } from "node:domain";

async function getBlogs(req: Request, res: Response) {
    try{
        const blogs = await prisma.blog.findMany({
            select: {
                id:true,
                title:true,
                createdAt:true
            }
        });
        res.status(200).json(blogs);
    }
    catch(error){
        res.status(500).json({error: "Unable to fetch blogs"});
    }
}

async function getBlogById(req: Request, res: Response) {
    const { id } = req.params;
    try{
        const blog = await prisma.blog.findUnique({
            where: {id: id}
        });
        if(!blog){
            return  res.status(404).json({error: "Blog not found"});
        }
        res.status(200).json(blog);
    }
    catch(error){
        res.status(500).json({error: "Unable to fetch blog"});
    }
}

export { getBlogs, getBlogById };   