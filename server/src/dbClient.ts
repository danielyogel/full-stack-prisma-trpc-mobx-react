import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({ log: ['info', 'warn', 'error'] });
export type PrismaInstance = typeof prisma;
