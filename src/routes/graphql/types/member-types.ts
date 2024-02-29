import { GraphQLEnumType, GraphQLFloat, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { MemberTypeId as MemberId } from "../../member-types/schemas.js";

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
  name: 'memberTypes',
  fields: () => ({
    id: { type: new GraphQLNonNull(MemberTypeId) },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLFloat },
  }),
});

export default memberType;