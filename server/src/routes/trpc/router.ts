import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { inferAsyncReturnType } from '@trpc/server';
import { prisma } from '../../dbClient';
import superjson from 'superjson';
import { createTrpcContext } from './createTrpcContext';
import { ServerContext } from '../ServerContext';

export const router = trpc
  .router<TrpcContext>()
  .transformer(superjson)

  .query('getPeople', {
    async resolve() {
      await prisma.person.deleteMany();

      return prisma.person.findMany();
    }
  })
  .mutation('create', {
    resolve: async function () {
      await prisma.person.create({ data: { name: Math.random().toString().slice(0, 6) } });
      return prisma.person.findMany();
    }
  });

export type TrpcContext = inferAsyncReturnType<ReturnType<typeof createTrpcContext>>;

export function trpcRoutes(serverContext: ServerContext) {
  const createContext = createTrpcContext(serverContext);
  serverContext.app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router,
      createContext: createContext,
      onError: ({ error, path, type }) => {
        console.error(`====== tRPC Router Error ! ====== \nPath: "${path?.toUpperCase()}" \nType: "${type.toUpperCase()}"`, { error });
      }
    })
  );
}
