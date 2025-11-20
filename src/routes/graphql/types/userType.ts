import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { UUIDType } from "./uuid.js";
import { PostType } from "./postType.js";
import { ProfileType } from "./profileType.js";
import { contextType } from "./contextType.js";

interface parentInterface {
  id: string
}

export const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    balance: {type: new GraphQLNonNull(GraphQLFloat)},
    profile: {type: ProfileType},
    posts: {type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType)))},
    userSubscribedTo: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: async (parent: parentInterface, _args, contextValue: contextType) => {
        const results = await contextValue.prisma.subscribersOnAuthors.findMany({
          where: { subscriberId: parent.id },
          include: { author: true }
        });
        return results.map(res => res.author);
      }
    },
    subscribedToUser: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: async (parent: parentInterface, _args, context: contextType) => {
        const results = await context.prisma.subscribersOnAuthors.findMany({
          where: { authorId: parent.id },
          include: { subscriber: true }
        });
        return results.map(res => res.subscriber);
      }
    }
  })
})
