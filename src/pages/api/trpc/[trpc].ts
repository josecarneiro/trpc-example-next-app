import { createNextApiHandler } from '@trpc/server/adapters/next';

import { appRouter } from '@/utils/trpc';

export default createNextApiHandler({
  router: appRouter
});
