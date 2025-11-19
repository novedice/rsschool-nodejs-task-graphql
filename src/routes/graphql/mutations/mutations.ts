import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { PostType } from "../types/postType.js";
import { ProfileType } from "../types/profileType.js";
import { UserType } from "../types/userType.js";
import { UUIDType } from "../types/uuid.js";
import { CreatePostInput, ChangePostInput } from "../inputs/postInput.js";
import { CreateProfileInput, ChangeProfileInput } from "../inputs/profileInput.js";
import { CreateUserInput, ChangeUserInput } from "../inputs/userInput.js";

export const Mutations = new GraphQLObjectType ({
  name: "Mutations",
  fields: {
    createUser: {
      type: new GraphQLNonNull(UserType),
      args: {
        input: {type: new GraphQLNonNull(CreateUserInput)}
      },
      resolve:() => {}
    },
    createProfile: {
      type: new GraphQLNonNull(ProfileType),
      args: {
        input: {type: new GraphQLNonNull(CreateProfileInput)}
      },
      resolve: () => {}
    },
    createPost: {
      type: new GraphQLNonNull(PostType),
      args: {
        input: {type: new GraphQLNonNull(CreatePostInput)}
      },
      resolve: () => {}
    },
    changePost: {
      type: new GraphQLNonNull(PostType),
      args: {
        input: {type: new GraphQLNonNull(ChangePostInput)},
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    changeProfile: {
      type: new GraphQLNonNull(ProfileType),
      args: {
        input: {type: new GraphQLNonNull(ChangeProfileInput)},
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    changeUser: {
      type: new GraphQLNonNull(UserType),
      args: {
        input: {type: new GraphQLNonNull(ChangeUserInput)},
        id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    deleteUser: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
         id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    deletePost: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
         id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    deleteProfile: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
         id: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    subscribeTo: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
        userId: {type: new GraphQLNonNull(UUIDType)},
        authorId: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    },
    unsubscribeFrom: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
        userId: {type: new GraphQLNonNull(UUIDType)},
        authorId: {type: new GraphQLNonNull(UUIDType)}
      },
      resolve: () => {}
    }
  }
})