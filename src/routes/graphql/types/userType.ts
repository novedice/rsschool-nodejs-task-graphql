import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { UUIDType } from "./uuid.js";
import { PostType } from "./postType.js";
import { ProfileType } from "./profileType.js";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
  id: { type: new GraphQLNonNull(UUIDType)},
  name: {type: new GraphQLNonNull(GraphQLString)},
  balance: {type: new GraphQLNonNull(GraphQLFloat)},
  profile: {type: ProfileType},
  posts: {type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType)))},
  userSubscribedTo: {type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType)))},
  subscribedToUser: {type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType)))}
})})
