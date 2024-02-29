import { UUID } from 'crypto';
import { Context } from '../models/models.js';

const postResolvers = {
  post: async ({ id }: { id: UUID }, context: Context) => {
    return await context.posts.load(id);
  },
  posts: async (_, context: Context) => {
    return await context.db.post.findMany();
  },
};

export default postResolvers;