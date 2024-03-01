import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export const postDTO = new GraphQLInputObjectType({
  name: 'CreatePost',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
export const postChangeDTO = new GraphQLInputObjectType({
  name: 'ChangePost',
  fields: () => ({
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    authorId: { type: GraphQLString },
  }),
});