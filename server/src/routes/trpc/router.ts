import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { inferAsyncReturnType } from '@trpc/server';
import { prisma } from '../../dbClient';
import superjson from 'superjson';
import { createTrpcContext } from './createTrpcContext';
import { ServerContext } from '../ServerContext';

const t = trpc.initTRPC.context<TrpcContext>().create({
  transformer: superjson,
  errorFormatter(opts) {
    return opts.shape;
  }
});

export const publicProcedure = t.procedure;

export const router = t.router({
  getPeople: publicProcedure.query(async () => {
    await prisma.person.deleteMany();

    return prisma.person.findMany();
  }),
  create: publicProcedure.mutation(async () => {
    await prisma.person.create({ data: { name: Math.random().toString().slice(0, 6) } });
    return prisma.person.findMany();
  })
});

export type TrpcContext = inferAsyncReturnType<ReturnType<typeof createTrpcContext>>;

export function trpcRoutes(serverContext: ServerContext) {
  const createContext = createTrpcContext(serverContext);
  serverContext.app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: router,
      createContext: createContext,
      onError: ({ error, path, type }) => {
        console.error(`====== tRPC Router Error ! ====== \nPath: "${path?.toUpperCase()}" \nType: "${type.toUpperCase()}"`, { error });
      }
    })
  );
}
