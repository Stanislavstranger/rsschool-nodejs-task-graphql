import { GraphQLFloat, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export const userDTO = new GraphQLInputObjectType({
  name: 'CreateUser',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
  }),
});

export const userChangeDTO = new GraphQLInputObjectType({
  name: 'ChangeUser',
  fields: () => ({
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
  }),
});