import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { PostType } from "../types/postType.js";
import { ProfileType } from "../types/profileType.js";
import { UserType } from "../types/userType.js";
import { UUIDType } from "../types/uuid.js";
import { CreatePostInput, ChangePostInput } from "../inputs/postInput.js";
import { CreateProfileInput, ChangeProfileInput } from "../inputs/profileInput.js";
import { CreateUserInput, ChangeUserInput } from "../inputs/userInput.js";
import { userResolver } from "../resolvers/userResolvers.js";
import { profileResolver } from "../resolvers/profileResolvers.js";
import { postResolvers } from "../resolvers/postsResolvers.js";
import { subscribeResolvers } from "../resolvers/subscribeResolvers.js";

export const Mutations = new GraphQLObjectType ({
  name: "Mutations",
  fields: {
    createUser: {
      type: new GraphQLNonNull(UserType),
      args: {
        input: {type: new GraphQLNonNull(CreateUserInput)}
      },
      resolve: userResolver.createUser
    },
    createProfile: {
      type: new GraphQLNonNull(ProfileType),
      args: {
        input: {type: new GraphQLNonNull(CreateProfileInput)}
      },
      resolve: profileResolver.createProfile
    },
    createPost: {
      type: new GraphQLNonNull(PostType),
      args: {
        input: {type: new GraphQLNonNull(CreatePostInput)}
      },
      resolve: postResolvers.createPost
    },
    changePost: {
      type: new GraphQLNonNull(PostType),
      args: {
        input: {type: new GraphQLNonNull(ChangePostInput)},
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: postResolvers.changePost
    },
    changeProfile: {
      type: new GraphQLNonNull(ProfileType),
      args: {
        input: {type: new GraphQLNonNull(ChangeProfileInput)},
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: profileResolver.changeProfile
    },
    changeUser: {
      type: new GraphQLNonNull(UserType),
      args: {
        input: {type: new GraphQLNonNull(ChangeUserInput)},
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: userResolver.changeUser
    },
    deleteUser: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
         id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: userResolver.deleteUser
    },
    deletePost: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
         id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: postResolvers.deletePost
    },
    deleteProfile: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
         id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: profileResolver.deleteProfile
    },
    subscribeTo: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
        userId: {type: new GraphQLNonNull(UUIDType)},
        authorId: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: subscribeResolvers.subscribeTo
    },
    unsubscribeFrom: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
        userId: {type: new GraphQLNonNull(UUIDType)},
        authorId: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: subscribeResolvers.unsubscribeFrom
    }
  }
})