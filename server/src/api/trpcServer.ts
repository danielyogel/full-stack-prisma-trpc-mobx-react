import * as trpc from '@trpc/server';
import { inferAsyncReturnType } from '@trpc/server';
import superjson from 'superjson';
import { ServerContext } from './ServerContext';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';

export const createTrpcContext = ({ env, prisma }: ServerContext) => {
  const isProduction = env.NODE_ENV === 'production';
  const isDev = !isProduction;

  return async ({}: CreateExpressContextOptions) => {
    return { env, isDev, prisma };
  };
};

export const t = trpc.initTRPC.context<TrpcContext>().create({
  transformer: superjson,
  errorFormatter(opts) {
    return opts.shape;
  }
});

export const publicProcedure = t.procedure;

export type TrpcContext = inferAsyncReturnType<ReturnType<typeof createTrpcContext>>;
