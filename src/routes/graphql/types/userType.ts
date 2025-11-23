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
    profile: {
      type: ProfileType,
      resolve: async(parent: parentInterface, _args, contextValue: contextType) => {
        return contextValue.loaders.profileLoader.load(parent.id);
      }
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
      resolve: async (parent: parentInterface, _args, contextValue: contextType) => {
        return contextValue.loaders.postLoader.load(parent.id);
      }
    },
    userSubscribedTo: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: async (parent: parentInterface, _args, contextValue: contextType) => {
        const results = await contextValue.loaders.subscriptionsLoader.load(parent.id);
        const authorIds = results.filter(res => res.subscriberId === parent.id).map(user => user.authorId);
        return contextValue.loaders.usersLoader.loadMany(authorIds);
      }
    },
    subscribedToUser: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: async (parent: parentInterface, _args, contextValue: contextType) => {
        const results = await contextValue.loaders.subscriptionsLoader.load(parent.id);
        const subscriberIds = results.filter(res => res.authorId === parent.id).map(user => user.subscriberId);
        return contextValue.loaders.usersLoader.loadMany(subscriberIds);
      }
    }
  })
})
