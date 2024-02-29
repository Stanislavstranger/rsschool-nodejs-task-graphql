import memberResolvers from "./member-types-resolver.js";
import postResolvers from "./post-resolver.js";
import userResolvers from "./user-resolvers.js";

const resolvers = {
  ...userResolvers,
  ...postResolvers,
  ...memberResolvers,
};

export default resolvers;