import { publicProcedure } from '../trpcServer';

export const create = publicProcedure.mutation(async ({ ctx: { prisma } }) => {
  await prisma.person.create({ data: { name: Math.random().toString().slice(0, 6) } });
  return prisma.person.findMany();
});
