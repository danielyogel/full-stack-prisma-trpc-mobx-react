import { Express } from 'express';
import { PrismaInstance } from '../dbClient';
import { getEnv } from '../envSchema';

export type ServerContext = {
  app: Express;
  env: ReturnType<typeof getEnv>;
  prisma: PrismaInstance;
};
