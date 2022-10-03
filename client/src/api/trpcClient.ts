import { createTRPCClient } from "@trpc/client";
import superjson from "superjson";
import { httpLink } from "@trpc/client/links/httpLink";
import type { AppRouter } from "full-stack-server/src/routes/trpc/routerType";

export const api = createTRPCClient<AppRouter>({
  transformer: superjson,
  links: [
    () =>
      ({ op, prev, next }) => {
        console.log("->", op.type, op.path, op.input);

        next(op, (result) => {
          console.log("<==", op.type, op.path, op.input, ":", result);
          prev(result);
        });
      },
    httpLink({ url: "/trpc" })
  ]
});
