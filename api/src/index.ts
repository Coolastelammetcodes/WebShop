import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { seedIfEmpty } from './data/seed.ts';

import mugs from "./routes/mugs.ts";

const app = new Hono()

app.route("/api/v1/mugs", mugs);

await seedIfEmpty();

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
