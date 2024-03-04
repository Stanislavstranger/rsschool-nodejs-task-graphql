import { UUID } from 'crypto';
import { PostDto } from '../models/models.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const postResolvers = {
  post: async ({ id }: { id: UUID }) => {
    return await prisma.post.findFirst({ where: { id } });
  },

  posts: async () => {
    return await prisma.post.findMany();
  },

  createPost: async ({ dto }: { dto: PostDto }) => {
    return await prisma.post.create({ data: dto });
  },

  changePost: async ({ id, dto }: { id: UUID; dto: Partial<PostDto> }) => {
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