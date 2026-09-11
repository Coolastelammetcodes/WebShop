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

mugs.delete("/:id", async (c) => {
  const id = c.req.param("id");

  try {
    const res = await db.mug.delete({
      where: { id: Number(id) }, // ta bort Number() om id är en sträng i schemat
    });
    return c.json(res, 200);
  } catch (error) {
    return c.json({ error: "Mug not found" }, 404);
  }
});

export default mugs;
