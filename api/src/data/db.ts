import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });
export const db = new PrismaClient({ adapter });
