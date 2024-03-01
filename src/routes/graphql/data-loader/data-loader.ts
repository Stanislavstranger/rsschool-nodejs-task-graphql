import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

const getDataFromBase = (prisma: PrismaClient) => {

  const usersById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    return await prisma.user.findMany({
      where: {
        id: { in: listIds },
      },
    });
  };

  const postsById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    return await prisma.post.findMany({
      where: {
        authorId: { in: listIds },
      },
    });
  };

  const membersTypeById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    return await prisma.memberType.findMany({
      where: {
        id: { in: listIds }
      }
    });
  };

  const profilesById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    return await prisma.profile.findMany({
      where: {
        userId: { in: listIds },
      },
    });
  };

  return {
    user: new DataLoader(usersById),
    post: new DataLoader(postsById),
    memberType: new DataLoader(membersTypeById),
    profile: new DataLoader(profilesById),
  };
};

export default getDataFromBase;