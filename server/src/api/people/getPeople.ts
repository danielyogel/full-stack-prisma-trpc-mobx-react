import { publicProcedure } from '../trpcServer';

export const getPeople = publicProcedure.query(async ({ ctx }) => {
  await ctx.prisma.person.deleteMany();

  return ctx.prisma.person.findMany();
});
