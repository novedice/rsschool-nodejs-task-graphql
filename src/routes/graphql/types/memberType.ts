import { GraphQLObjectType, GraphQLNonNull, GraphQLFloat, GraphQLInt, GraphQLEnumType } from "graphql";

export const MemberTypeId: GraphQLEnumType = new GraphQLEnumType({
  name: "MemberTypeId",
  values: {
    BASIC: {value: "BASIC"},
    BUSINESS: {value: "BUSINESS"}
  }
})

export const MemberType: GraphQLObjectType = new GraphQLObjectType({
  name: "MemberType",
  fields: {
    id: { type: new GraphQLNonNull(MemberTypeId)},
    discount: {type: new GraphQLNonNull(GraphQLFloat)},
    postsLimitPerMonth: { type: new GraphQLNonNull(GraphQLInt)},
  }
})
