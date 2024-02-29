import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import postType from "./post.js";
import { profileType } from "./profile.js";

export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
    posts: { type: new GraphQLList(postType) },
    profile: { type: new GraphQLList(profileType) },
    userSubscribedTo: { type: new GraphQLList(userType) },
    subscribedToUser: { type: new GraphQLList(userType) },
  }),
});