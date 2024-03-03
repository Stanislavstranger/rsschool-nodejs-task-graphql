import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { MemberId } from './member-types.js';

export const profileDTO = new GraphQLInputObjectType({
  name: 'CreateProfile',
  fields: () => ({
    userId: { type: new GraphQLNonNull(GraphQLString) },
    memberTypeId: { type: new GraphQLNonNull(MemberId) },
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

export const profileChangeDTO = new GraphQLInputObjectType({
  name: 'ChangeProfile',
  fields: () => ({
    memberTypeId: { type: MemberId },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
  }),
});