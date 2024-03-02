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
import { Profile } from '@prisma/client';
import { Context } from '../models/models.js';

export const profileType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLFloat },
    user: {
      type: userType,
      async resolve(profile: Profile, context: Context) {
        return await context.user.load(profile.id);
      },
    },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberType: {
      type: memberType,
      async resolve(profile: Profile, context: Context) {
        return await context.memberTypes.load(profile.memberTypeId);
      },
    },
    memberTypeId: { type: GraphQLString },
  }),
});