import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/blogs/id
router.get("/:id", async (req, res) => {

    const id = Number(req.params.id);

    try {
        const [blogtags] = await db.blogtags.retrieve(id);
        res.json(blogtags);
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});

export default router;

/*
[
    [],
    {}
]

 this is the reason we put blogtags in square brackets
*/