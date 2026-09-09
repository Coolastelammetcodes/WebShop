import { Hono } from "hono";
import { db } from "../db.ts";

const mugs = new Hono()

mugs.get("/", async (c) => {
    const mugs = await db.mug.findMany();
    return c.json(mugs, 200);
})

mugs.post("/", async (c) => {
    const mug = await c.req.json()
   await db.mug.create({data: mug})
   return c.json("created", 200);
})

export default mugs;