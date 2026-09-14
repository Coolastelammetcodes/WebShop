import { Hono } from "hono";
import { db } from "../data/db.ts";

const cartItems = new Hono();

cartItems.post("/", async (c) => {
    const {cartId, mugId, quantity} = await c.req.json();

    try {
        const res = await db.cartItem.upsert({
            where: {
                cartId_mugId: { cartId, mugId}
            },
            update: {
                quantity: {increment: quantity ?? 1},
            },
            create: {
                cartId,
                mugId,
                quantity: quantity ?? 1,
            }
        });

        return c.json(res, 201);
    } catch {
        return c.json({error: "could not add item to cart" }, 400);
    }
});

cartItems.put("/:id", async (c) => {
    const id = Number(c.req.param("id"));
    const { quantity } = await c.req.json();

    try {
        const res = await db.cartItem.update({
            where: { id },
            data: { quantity },
        });

        return c.json(res, 200);
    } catch {
        return c.json({ error: "Cart item not found" }, 404);
    }
});

cartItems.delete("/:id", async (c) => {
    const id = Number(c.req.param("id"));

    try {
        const res = await db.cartItem.delete({ where: { id }});
        return c.json(res, 200);
    } catch {
        return c.json({ error: "Cart item not found" }, 404);
    }
});

export default cartItems;