import { UUID } from 'crypto';
import { Context, ProfileDto } from '../models/models.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const profileResolvers = {
  profile: async ({ id }: { id: UUID }) => {
    return await prisma.profile.findFirst({ where: { id } });
  },

  profiles: async (_, context: Context) => {
    return await context.db.profile.findMany();
  },

  createProfile: async ({ dto }: { dto: ProfileDto }) => {
    return await prisma.profile.create({ data: dto });
  },

  changeProfile: async ({ id, dto }: { id: UUID; dto: Partial<ProfileDto> }) => {
    return await prisma.profile.update({
      where: { id },
      data: dto,
    });
  },

  deleteProfile: async ({ id }: { id: UUID }) => {
    await prisma.profile.delete({ where: { id } });
    return '';
  },
};

export default profileResolvers;