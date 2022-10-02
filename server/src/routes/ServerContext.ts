import type { Express } from 'express';
import type { PrismaInstance } from '../dbClient';
import type { getEnv } from '../envSchema';

export type ServerContext = {
  app: Express;
  env: ReturnType<typeof getEnv>;
  prisma: PrismaInstance;
};
