import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

// seed
import { seedIfEmpty } from './data/seed.ts';

// routes
import cartItems from "./routes/cartItems.ts";
import carts from "./routes/carts.ts";
import mugs from "./routes/mugs.ts";

const app = new Hono()
app.use("/assets/*", serveStatic({ root: "./src"}))

app.route("/api/v1/mugs", mugs);
app.route("/api/v1/carts", carts)
app.route("/api/v1/cart-items", cartItems);

await seedIfEmpty();

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
