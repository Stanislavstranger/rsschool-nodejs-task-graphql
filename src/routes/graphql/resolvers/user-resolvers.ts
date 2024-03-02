import { UUID } from "crypto";
import { Context, UserDTO } from "../models/models.js";
import { GraphQLResolveInfo } from "graphql";
import { parseResolveInfo } from "graphql-parse-resolve-info";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userResolvers = {
  user: async ({ id }: { id: UUID }) => {
    return await prisma.user.findFirst({ where: { id } });
  },

  users: async (_, context: Context, info: GraphQLResolveInfo) => {
    const resolvedInfo = parseResolveInfo(info);
    const users = await context.db.user.findMany({
      include: {
        subscribedToUser: !!resolvedInfo?.fieldsByTypeName.User['subscribedToUser'],
        userSubscribedTo: !!resolvedInfo?.fieldsByTypeName.User['userSubscribedTo'],
      },
    });
    users.forEach((user) => context.user.prime(user.id, user));
    return users;
  },

  createUser: async ({ dto }: { dto: UserDTO }, context: Context) => {
    return await context.db.user.create({ data: dto, });
  },

  changeUser: async ({ id, dto }: { id: UUID; dto: Partial<UserDTO> }, context: Context) => {
    return await context.db.user.update({ where: { id }, data: dto, });
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