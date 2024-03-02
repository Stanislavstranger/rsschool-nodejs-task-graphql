import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

const getDataFromBase = (prisma: PrismaClient) => {

  const usersById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const users = await prisma.user.findMany({
      where: {
        id: { in: listIds },
      },
      include: {
        subscribedToUser: true,
        userSubscribedTo: true,
      },
    });
    return ids.map((id) => users.find((user) => user.id === id));
  };

  const postsById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const posts = await prisma.post.findMany({
      where: {
        authorId: { in: listIds },
      },
    });
    return ids.map((id) => posts.find((post) => post.authorId === id));
  };

  const membersTypeById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const members = await prisma.memberType.findMany({
      where: {
        id: { in: listIds }
      }
    });
    return ids.map((id) => members.find((member) => member.id === id));
  };

  const profilesById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const profiles = await prisma.profile.findMany({
      where: {
        userId: { in: listIds },
      },
    });
    return ids.map((id) => profiles.find((profile) => profile.userId === id));
  };

  const subscribedTo = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const subscribes = await prisma.subscribersOnAuthors.findMany({
      where: {
        subscriberId: { in: listIds },
      },
      select: {
        subscriberId: true,
        author: true,
      },
    });
    return ids.map(
      (id) => subscribes.find((subscribe) => subscribe.subscriberId === id)?.author,
    );
  };

  const userSubscribedTo = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const subscribes = await prisma.subscribersOnAuthors.findMany({
      where: {
        authorId: { in: listIds },
      },
      select: {
        subscriber: true,
        authorId: true,
      },
    });
    return ids.map(
      (id) => subscribes.find((subscribe) => subscribe.authorId === id)?.subscriber,
    );
  };

  return {
    user: new DataLoader(usersById),
    posts: new DataLoader(postsById),
    memberTypes: new DataLoader(membersTypeById),
    profiles: new DataLoader(profilesById),
    subscribedTo: new DataLoader(subscribedTo),
    userSubscribedTo: new DataLoader(userSubscribedTo),
  };
};

export default getDataFromBase;