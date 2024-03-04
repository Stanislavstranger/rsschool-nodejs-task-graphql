import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { userType } from "./users.js";
import { UUIDType } from "./uuid.js";

const subscribeType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Subscriber',
  fields: () => ({
    subscriber: { type: new GraphQLNonNull(userType) },
    subscriberId: { type: new GraphQLNonNull(UUIDType) },
    author: { type: new GraphQLNonNull(userType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  }),
});

export default subscribeType;