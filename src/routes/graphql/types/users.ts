import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import postType from "./post.js";
import { profileType } from "./profile.js";
import { User } from "@prisma/client";
import { Context, UserData } from "../models/models.js";

export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
    posts: {
      type: new GraphQLList(postType),
      async resolve(user: User, _, context: Context) {
        const res = await context.posts.load(user.id);
        return [res];
      },
    },
    profile: {
      type: profileType,
      async resolve(user: User, _, context: Context) {
        return context.profiles.load(user.id);
      },
    },
    userSubscribedTo: {
      type: new GraphQLList(userType),
      async resolve(userData: UserData, _, context: Context) {
        return context.user.loadMany(userData.userSubscribedTo?.map((subscriber) => subscriber.authorId) || []);
      },
    },
    subscribedToUser: {
      type: new GraphQLList(userType),
      async resolve(userData: UserData, _, context: Context) {
        return context.user.loadMany(userData.subscribedToUser?.map((subscriber) => subscriber.subscriberId) || []);
      },
    },
  }),
});