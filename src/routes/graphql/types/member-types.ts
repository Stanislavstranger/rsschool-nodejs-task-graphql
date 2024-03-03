import { GraphQLEnumType, GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { MemberTypeId } from "../../member-types/schemas.js";
import { profileType } from "./profile.js";

export const MemberId: GraphQLEnumType = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    [MemberTypeId.BASIC]: {
      value: "basic",
    },
    [MemberTypeId.BUSINESS]: {
      value: "business",
    },
  },
});

const memberType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    id: { type: new GraphQLNonNull(MemberId) },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLFloat },
    profiles: { type: new GraphQLList(profileType) },
  }),
});

export default memberType;