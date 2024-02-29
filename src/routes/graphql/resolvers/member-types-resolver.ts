import { UUID } from "crypto";
import { Context } from "../models/models.js";

const memberResolvers = {
  memberType: async ({ id }: { id: UUID }, context: Context) => {
    return await context.memberType.load(id);
  },
  memberTypes: async (_, context: Context) => {
    return await context.db.memberType.findMany();
  },
};

export default memberResolvers;