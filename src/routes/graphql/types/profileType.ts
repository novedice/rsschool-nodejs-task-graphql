import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt } from "graphql";
import { UUIDType } from "./uuid.js";
import { MemberType } from "./memberType.js";
import { contextType } from "./contextType.js";

interface parentInterface {
  memberTypeId: string
}

export const ProfileType: GraphQLObjectType = new GraphQLObjectType({
  name: "Profile",
  fields: {
    id: { type: new GraphQLNonNull(UUIDType)},
    isMale: { type: new GraphQLNonNull(GraphQLBoolean)},
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt)},
    memberType: { 
      type: new GraphQLNonNull(MemberType),
      resolve: async (parent: parentInterface, _args, contextValue: contextType) => {
        return contextValue.loaders.memberTypeLoader.load(parent.memberTypeId);
      }
    }
  }
})