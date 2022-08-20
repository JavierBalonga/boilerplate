import { PrismaClient } from "@prisma/client";
import env from "../env";

const { DATABASE_LOGS } = env;

const prisma = new PrismaClient({
  log: DATABASE_LOGS ? ["query", "info", "warn", "error"] : [],
});

export default prisma;
