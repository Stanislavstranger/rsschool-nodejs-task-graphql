import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";

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
  userSubscribedTo: async ({ userId, authorId }: { userId: UUID; authorId: UUID }) => {
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
};

export default subscribeResolver;