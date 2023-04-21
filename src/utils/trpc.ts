/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment */
import { db } from './db';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.create({});

export const appRouter = t.router({
  list: t.procedure.query(async () => {
    const posts = await db.post.findMany();
    return posts;
  }),
  load: t.procedure
    .input((value: unknown): any => {
      return value as any;
    })
    .query(async (opts) => {
      const { input } = opts;
      const post = await db.post.findById(input);
      return post;
    }),
  create: t.procedure
    .input((value: unknown): any => {
      return value as any;
    })
    .mutation(async (opts) => {
      const { input } = opts;
      const post = await db.post.create(input);
      return post;
    })
});

export type AppRouter = typeof appRouter;
