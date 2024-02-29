import memberResolvers from "./member-types-resolver.js";
import postResolvers from "./post-resolver.js";
import profileResolvers from "./profile-resolver.js";
import subscribeResolver from "./subscribe-resolver.js";
import userResolvers from "./user-resolvers.js";

const resolvers = {
  ...userResolvers,
  ...postResolvers,
  ...memberResolvers,
  ...profileResolvers,
  ...subscribeResolver,
};

export default resolvers;