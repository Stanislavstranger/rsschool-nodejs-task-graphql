import postResolvers from "./post-resolver.js";
import userResolvers from "./user-resolvers.js";

const resolvers = {
  ...userResolvers,
  ...postResolvers,
};

export default resolvers;