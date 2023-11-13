import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import superjson from 'superjson';
import { httpLink } from '@trpc/client/links/httpLink';
import type { AppRouter } from '../../../server/src/api';

export const api = createTRPCProxyClient<AppRouter>({
  links: [loggerLink({ enabled: (opts) => true }), httpBatchLink({ url: '/trpc' })],
  transformer: superjson
});
