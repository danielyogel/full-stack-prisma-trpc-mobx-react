import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development']),
  DATABASE_URL: z.string()
});

export function getEnv() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    throw result.error;
  }

  return result.data;
}
