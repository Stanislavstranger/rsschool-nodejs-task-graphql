import { UUID } from 'crypto';
import { Context, PostDTO } from '../models/models.js';

const postResolvers = {
  post: async ({ id }: { id: UUID }, context: Context) => {
    return await context.posts.load(id);
  },

  posts: async (_, context: Context) => {
    return await context.db.post.findMany();
  },

  createPost: async ({ dto }: { dto: PostDTO }, context: Context) => {
    return await context.db.post.create({ data: dto });
  },

  changePost: async ({ id, dto }: { id: UUID; dto: Partial<PostDTO> }, context: Context) => {
    return await context.db.post.update({
      where: { id },
      data: dto,
    });
  },

  deletePost: async ({ id }: { id: UUID }, context: Context) => {
    await context.db.post.delete({ where: { id } });
    return '';
  },
};

export default postResolvers;