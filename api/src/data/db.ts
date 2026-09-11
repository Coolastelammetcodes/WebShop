import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";
import process from "process";
import { PrismaClient } from "./generated/prisma/client.ts";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });
export const db = new PrismaClient({ adapter });
