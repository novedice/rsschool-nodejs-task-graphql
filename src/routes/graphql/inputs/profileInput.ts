import { GraphQLInputObjectType, GraphQLBoolean, GraphQLInt, GraphQLNonNull } from "graphql"
import { MemberTypeId } from "../types/memberType.js"
import { UUIDType } from "../types/uuid.js"

export const ChangeProfileInput = new GraphQLInputObjectType({
  name: "ChangeProfileInput",
  fields: () => ({
    isMale: {type: GraphQLBoolean},
    yearOfBirth: {type: GraphQLInt},
    memberTypeId: {type: MemberTypeId}
  })
})

export const CreateProfileInput = new GraphQLInputObjectType ({
  name: "CreateProfileInput",
  fields: () => ({
    isMale: {type: new GraphQLNonNull(GraphQLBoolean)},
    yearOfBirth: {type: new GraphQLNonNull(GraphQLInt)},
    userId: {type: new GraphQLNonNull(UUIDType)},
    memberTypeId: {type: new GraphQLNonNull(MemberTypeId)}
  })
})
