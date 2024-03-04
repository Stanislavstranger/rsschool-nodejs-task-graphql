import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import { userType } from "./users.js";

const postType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { type: new GraphQLNonNull(userType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  }),
});

export default postType;