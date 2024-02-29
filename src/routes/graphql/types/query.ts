import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql"
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    users: {
      type: new GraphQLList(userType),
    },
  },
});