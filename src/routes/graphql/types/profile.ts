import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { UUIDType } from './uuid.js';
import { userType } from './users.js';
import memberType from './member-types.js';

export const profileType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLFloat },
    user: { type: userType },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberType: { type: memberType },
    memberTypeId: { type: GraphQLString },
  }),
});