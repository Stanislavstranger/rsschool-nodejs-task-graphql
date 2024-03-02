import { UUID } from "crypto";
import { Context } from "../models/models.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const memberResolvers = {
  memberType: async ({ id }: { id: UUID }) => {
    return await prisma.memberType.findFirst({ where: { id } });
  },
  memberTypes: async (_, context: Context) => {
    return await context.db.memberType.findMany();
  },
};

export default memberResolvers;