import { GraphQLObjectType, GraphQLString } from "graphql";
import { userChangeDTO, userDTO } from "./user.dto.js";
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";
import postType from "./post.js";
import { postChangeDTO, postDTO } from "./post.dto.js";
import { profileType } from "./profile.js";
import { profileChangeDTO, profileDTO } from "./profile.dto.js";

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: { type: userType, args: { dto: { type: userDTO } } },

    changeUser: {
      type: userType,
      args: {
        id: { type: UUIDType },
        dto: { type: userChangeDTO },
      },
    },

    deleteUser: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    createPost: { type: postType, args: { dto: { type: postDTO } } },

    changePost: {
      type: postType,
      args: {
        id: { type: UUIDType },
        dto: { type: postChangeDTO },
      },
    },

    deletePost: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    createProfile: { type: profileType, args: { dto: { type: profileDTO } } },

    changeProfile: {
      type: profileType,
      args: {
        id: { type: UUIDType },
        dto: { type: profileChangeDTO },
      },
    },

    deleteProfile: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    subscribedToUser: {
      type: userType,
      args: {
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
      },
    },

    userSubscribedTo: {
      type: GraphQLString,
      args: {
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
      },
    },
  }),
});