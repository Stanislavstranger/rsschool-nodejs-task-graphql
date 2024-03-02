import { GraphQLEnumType, GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { MemberTypeId as MemberId } from "../../member-types/schemas.js";
import { profileType } from "./profile.js";

export const MemberTypeId: GraphQLEnumType = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    [MemberId.BASIC]: {
      value: MemberId.BASIC,
    },
    [MemberId.BUSINESS]: {
      value: MemberId.BUSINESS,
    },
  },
});

const memberType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    id: { type: new GraphQLNonNull(MemberTypeId) },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLFloat },
    profiles: { type: new GraphQLList(profileType) },
  }),
});

export default memberType;