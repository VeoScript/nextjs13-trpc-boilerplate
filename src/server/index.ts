// import prisma from "~/config/Prisma";
// import z from "zod";

import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getMessage: publicProcedure.query(async () => {
    return "tRPC API IS READY...";
  }),
});

export type AppRouter = typeof appRouter;
