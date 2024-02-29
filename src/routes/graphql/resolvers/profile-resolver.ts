import { UUID } from 'crypto';
import { Context } from '../models/models.js';

const profileResolvers = {
  profile: async ({ id }: { id: UUID }, context: Context) => {
    return await context.profile.load(id);
  },
  profiles: async (_, context: Context) => {
    return await context.db.profile.findMany();
  },
};

export default profileResolvers;