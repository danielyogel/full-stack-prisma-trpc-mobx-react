import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import type { inferAsyncReturnType } from "@trpc/server";
import { prisma } from "../../dbClient";
import superjson from "superjson";
import { createTrpcContext } from "./createTrpcContext";
import type { ServerContext } from "../ServerContext";

export const router = trpc
  .router<TrpcContext>()
  .transformer(superjson)

  .query("getPeople", {
    async resolve() {
      return prisma.person.findMany();
    }
  })
  .mutation("create", {
    resolve: async function () {
      return prisma.person.create({ data: { name: btoa(Math.random().toString()).substring(10, 15) } });
    }
  })
  .mutation("deleteAll", {
    resolve: async () => {
      return prisma.person.deleteMany();
    }
  });

export type TrpcContext = inferAsyncReturnType<ReturnType<typeof createTrpcContext>>;

export function trpcRoutes(serverContext: ServerContext) {
  const createContext = createTrpcContext(serverContext);
  serverContext.app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router,
      createContext: createContext,
      onError: ({ error, path, type }) => {
        console.error(`====== tRPC Router Error ! ====== \nPath: "${path?.toUpperCase()}" \nType: "${type.toUpperCase()}"`, { error });
      }
    })
  );
}
