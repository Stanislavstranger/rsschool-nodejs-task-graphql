import { GraphQLObjectType, GraphQLString } from "graphql";
import { userChangeDTO, userDTO } from "./user-dto.js";
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";

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
  }),
});