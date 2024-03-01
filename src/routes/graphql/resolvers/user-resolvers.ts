import { UUID } from "crypto";
import { Context, UserDTO } from "../models/models.js";

const userResolvers = {
  user: async ({ id }: { id: UUID }, context: Context) => {
    return await context.user.load(id);
  },
  users: async (_, context: Context) => {
    return await context.db.user.findMany();
  },
  createUser: async ({ dto }: { dto: UserDTO }, context: Context) => {
    return await context.db.user.create({ data: dto, });
  },
  changeUser: async ({ id, dto }: { id: UUID; dto: Partial<UserDTO> }, context: Context) => {
    return await context.db.user.update({
      where: { id },
      data: dto,
    });
  },
  deleteUser: async ({ id }: { id: UUID }, context: Context) => {
    await context.db.user.delete({
      where: {
        id,
      },
    });
    return '';
  },

};

export default userResolvers;