import { UUID } from 'crypto';
import { Context, PostDTO } from '../models/models.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const postResolvers = {
  post: async ({ id }: { id: UUID }) => {
    return await prisma.post.findFirst({ where: { id } });
  },

  posts: async (_, context: Context) => {
    return await context.db.post.findMany();
  },

  createPost: async ({ dto }: { dto: PostDTO }) => {
    return await prisma.post.create({ data: dto });
  },

  changePost: async ({ id, dto }: { id: UUID; dto: Partial<PostDTO> }) => {
    return await prisma.post.update({
      where: { id },
      data: dto,
    });
  },

  deletePost: async ({ id }: { id: UUID }) => {
    await prisma.post.delete({ where: { id } });
    return '';
  },
};

export default postResolvers;