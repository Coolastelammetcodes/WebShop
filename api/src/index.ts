import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

// seed
import { seedIfEmpty } from './data/seed.ts';

// routes
import mugs from "./routes/mugs.ts";

const app = new Hono()
app.use("/assets/*", serveStatic({ root: "./src"}))

app.route("/api/v1/mugs", mugs);

await seedIfEmpty();

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
