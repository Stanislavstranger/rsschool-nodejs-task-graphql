import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";

const subscribeType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Subscribe',
  fields: () => ({
    subscribe: { type: new GraphQLNonNull(userType) },
    subscribeId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  }),
});

export default subscribeType;