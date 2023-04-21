/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment */
import { db } from './db';
import { initTRPC } from '@trpc/server';
import { PostListSchema, PostSchema } from './schemas';
import { z } from 'zod';

export const t = initTRPC.create({});

export const appRouter = t.router({
  list: t.procedure.output(PostListSchema).query(async () => {
    const posts = await db.post.findMany();
    return posts;
  }),
  load: t.procedure
    .output(PostSchema)
    .input(z.number())
    .query(async (opts) => {
      const { input } = opts;
      const post = await db.post.findById(input);
      if (!post) throw new Error('Post not found');
      return post;
    }),
  create: t.procedure
    .input(PostSchema.pick({ title: true, body: true, userId: true }))
    .mutation(async (opts) => {
      const { input } = opts;
      const post = await db.post.create(input);
      return post;
    })
});

export type AppRouter = typeof appRouter;
