import { Hono } from "hono";
import { db } from "../data/db.ts";

const mugs = new Hono();

mugs.get("/", async (c) => {
  const res = await db.mug.findMany();

  return c.json(res, 200);
});

mugs.post("/", async (c) => {
  const mug = await c.req.json();
  const res = await db.mug.create({ data: mug });
  return c.json(res, 201);
});

export default mugs;
