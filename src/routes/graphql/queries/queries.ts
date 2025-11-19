import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from "graphql";
import { MemberType, MemberTypeId } from "../types/memberType.js";
import { PostType } from "../types/postType.js";
import { ProfileType } from "../types/profileType.js";
import { UserType } from "../types/userType.js";
import { UUIDType } from "../types/uuid.js";
import { userResolver} from "../resolvers/userResolvers.js";
import { postResolvers } from "../resolvers/postsResolvers.js";
import { profileResolver } from "../resolvers/profileResolvers.js";
import { memberTypeResolver } from "../resolvers/memberTypeResolver.js";

export const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    memberTypes: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MemberType))),
      resolve: memberTypeResolver.memberTypes
    },
    memberType: {
      type: MemberType,
      args: {
        id: {type: new GraphQLNonNull(MemberTypeId)}
      },
      resolve: memberTypeResolver.memberType
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: userResolver.users,
    },
    user: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: userResolver.user,
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
      resolve: postResolvers.posts
    },
    post: {
      type: PostType,
      args: {
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: postResolvers.post
    },
    profiles: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ProfileType))),
      resolve: profileResolver.profiles
    },
    profile: {
      type: ProfileType,
      args: {
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: profileResolver.profile
    }
  }),
})