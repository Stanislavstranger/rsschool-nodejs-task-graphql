import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

const getDataFromBase = (prisma: PrismaClient) => {

  const dataById = async (ids: readonly string[]) => {
    const listIds = [...ids];
    const users = await prisma.user.findMany({
      where: {
        id: { in: listIds },
      },
    });
    return users;
  };
  return {
    user: new DataLoader(dataById),
  };
};

export default getDataFromBase;