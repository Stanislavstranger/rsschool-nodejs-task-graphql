import { UUID } from "crypto";
import { Context } from "../models/models.js";

const userResolvers = {
  user: async ({ id }: { id: UUID }, context: Context) => {
    return await context.user.load(id);
  },
  users: async (_, context: Context) => {
    const users = await context.db.user.findMany();
    return users;
  },
};

export default userResolvers;