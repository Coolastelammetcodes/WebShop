import { Hono } from "hono";
import { db } from "../data/db.ts";

const carts = new Hono();

carts.get("/", async (c) => {
    const res = await db.cart.findMany({
        include: {
            items: {
                include: { mug: true},
            },
        },
    });

    return c.json(res, 200);
});

carts.post("/", async (c) => {
    const res = await db.cart.create({ data: {} })
  return c.json(res, 201);
})

export default carts