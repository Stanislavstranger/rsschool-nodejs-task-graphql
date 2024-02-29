import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Context, UserData } from "../models/models.js";

const prisma = new PrismaClient();

const subscribeResolver = {
  subscribeTo: async ({ userId, authorId }: { userId: UUID; authorId: UUID }) => {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userSubscribedTo: {
          create: {
            authorId: authorId,
          },
        },
      },
    });
  },
  unsubscribeFrom: async ({ userId, authorId }: { userId: UUID; authorId: UUID }) => {
    await prisma.subscribersOnAuthors.delete({
      where: {
        subscriberId_authorId: {
          subscriberId: userId,
          authorId: authorId,
        },
      },
    });
    return ''
  },
  userSubscribedTo: async (userData: UserData, _, context: Context) => {
    return context.user.loadMany(userData.userSubscribedTo?.map((s) => s.authorId) || []);
  },
  subscribedToUser: async (userData: UserData, _, context: Context) => {
    return context.user.loadMany(userData.subscribedToUser?.map((s) => s.subscriberId) || []);
  },

};

export default subscribeResolver;