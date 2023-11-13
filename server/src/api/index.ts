import * as trpcExpress from '@trpc/server/adapters/express';
import { createTrpcContext } from './trpcServer';
import { ServerContext } from './ServerContext';
import { router } from './people';

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

export type AppRouter = typeof router;
