import { createTRPCClient } from '@trpc/client';
import superjson from 'superjson';
import type { inferProcedureInput } from '@trpc/server';
import { httpLink } from '@trpc/client/links/httpLink';
import { PromiseValue } from 'type-fest';
import type { AppRouter } from '../../../server/src/routes/trpc/routerType';

export const api = createTRPCClient<AppRouter>({
  transformer: superjson,
  links: [
    () => ({ op, prev, next }) => {
      console.log('->', op.type, op.path, op.input);

      next(op, (result) => {
        console.log('<==', op.type, op.path, op.input, ':', result);
        prev(result);
      });
    },
    httpLink({ url: '/trpc' })
  ]
});
