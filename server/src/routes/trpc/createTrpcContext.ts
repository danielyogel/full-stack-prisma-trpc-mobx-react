import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { ServerContext } from '../ServerContext';

export const createTrpcContext = ({ env, prisma }: ServerContext) => {
  const isProduction = env.NODE_ENV === 'production';
  const isDev = !isProduction;

  return async ({}: CreateExpressContextOptions) => {
    return { env, isDev, prisma };
  };
};
