import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/blogs 
router.get("/:id?", async (req, res) => {
    // this is a way to check if its working before working on it :: res.json({ msg: "text blog get" })
    const id = Number(req.params.id);

    try {
        if (id) {
            const [blog] = await db.blogs.one(id);
            res.json(blog);
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});

// POST /api/blogs/
// Request Body { title: string, content: string, authorid: number }
router.post("/", async (req, res) => {

    const blogDTO = req.body; //DTO is generally used when refering to the whole req.body - data transfer object
    blogDTO.authorid = 1; //in the future whoever logs in will replace this

    try {
        const result = await db.blogs.insert(blogDTO);
        res.json({ msg: "blog created", id: result.insertId });
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});

// PUT /api/blogs/1
router.put("/:id", async (req, res) => {
    const id = Number(req.params.id)
    const editBlogDTO = req.body; //DTO is generally used when refering to the whole req.body - data transfer object

    try {
        const result = await db.blogs.update(editBlogDTO, id);
        res.json({ msg: `blog ${id} changed!`, affectedRows: result.affectedRows});
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});

// DELETE /api/blogs/1
router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id)

    try {
        const result = await db.blogs.destroy(id);
        res.json({ msg: `blog ${id} destroyed muhahaha!`, affectedRows: result.affectedRows});
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});

export default router;