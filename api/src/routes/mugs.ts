import { Hono } from "hono";

const mugs = new Hono()

const mugArray: any[] = [];

mugs.get("/", async (c) => {
    return c.json(mugArray, 200)
})

mugs.post("/", async (c) => {
    const mug = await c.req.json()
    mugArray.push(mug);
    return c.json("thanks", 201);
})

export default mugs;