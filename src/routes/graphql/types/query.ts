import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";
import memberType, { MemberId } from "./member-types.js";
import postType from "./post.js";
import { profileType } from "./profile.js";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: userType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    users: {
      type: new GraphQLList(userType),
    },
    post: {
      type: postType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    posts: {
      type: new GraphQLList(postType),
    },
    memberType: {
      type: memberType,
      args: {
        id: { type: new GraphQLNonNull(MemberId) },
      }
    },
    memberTypes: {
      type: new GraphQLList(memberType),
    },
    profile: {
      type: profileType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      }
    },
    profiles: {
      type: new GraphQLList(profileType),
    },
  }),
});