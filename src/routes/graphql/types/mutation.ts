import { GraphQLObjectType, GraphQLString } from "graphql";
import { userChangeDto, userDto } from "./user.dto.js";
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";
import postType from "./post.js";
import { postChangeDto, postDto } from "./post.dto.js";
import { profileType } from "./profile.js";
import { profileChangeDto, profileDto } from "./profile.dto.js";

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: { type: userType, args: { dto: { type: userDto } } },

    changeUser: {
      type: userType,
      args: {
        id: { type: UUIDType },
        dto: { type: userChangeDto },
      },
    },

    deleteUser: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    createPost: { type: postType, args: { dto: { type: postDto } } },

    changePost: {
      type: postType,
      args: {
        id: { type: UUIDType },
        dto: { type: postChangeDto },
      },
    },

    deletePost: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    createProfile: { type: profileType, args: { dto: { type: profileDto } } },

    changeProfile: {
      type: profileType,
      args: {
        id: { type: UUIDType },
        dto: { type: profileChangeDto },
      },
    },

    deleteProfile: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    subscribeTo: {
      type: userType,
      args: {
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
      },
    },

    unsubscribeFrom: {
      type: GraphQLString,
      args: {
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
      },
    },
  }),
});