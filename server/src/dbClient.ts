import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({ log: ["info", "warn", "error"] });
export type PrismaInstance = typeof prisma;

try {
  prisma.$connect(); // test connection is available
} catch (error) {
  console.error(error);
  process.exit(1);
}
