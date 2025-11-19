import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from "graphql";
import { MemberType, MemberTypeId } from "../types/memberType.js";
import { PostType } from "../types/postType.js";
import { ProfileType } from "../types/profileType.js";
import { UserType } from "../types/userType.js";
import { UUIDType } from "../types/uuid.js";

export const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    memberTypes: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MemberType))),
      resolve: () => {}
    },
    memberType: {
      type: MemberType,
      args: {
        id: {type: new GraphQLNonNull(MemberTypeId)}
      },
      resolve: () => {}
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: () => {}
    },
    user: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
      resolve: () => {}
    },
    post: {
      type: PostType,
      args: {
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    profiles: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ProfileType))),
      resolve: () => {}
    },
    profile: {
      type: ProfileType,
      args: {
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    }
  }),
})