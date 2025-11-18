/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList, GraphQLBoolean, GraphQLEnumType, GraphQLInputObjectType } from "graphql";
import { UUIDType } from "./types/uuid.js";
export const PostType = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: new GraphQLNonNull(UUIDType)},
    title: { type: new GraphQLNonNull(GraphQLString)},
    content: { type: new GraphQLNonNull(GraphQLInt)},
  }
})

export const MemberTypeId = new GraphQLEnumType({
  name: "MemberTypeId",
  values: {
    BASIC: {value: "BASIC"},
    BUSINESS: {value: "BUSINESS"}
  }
})

export const MemberType = new GraphQLObjectType({
  name: "MemberType",
  fields: {
    id: { type: new GraphQLNonNull(MemberTypeId)},
    discount: {type: new GraphQLNonNull(GraphQLFloat)},
    postsLimitPerMonth: { type: new GraphQLNonNull(GraphQLInt)},
  }
})

export const ProfileType = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: new GraphQLNonNull(UUIDType)},
    isMale: { type: new GraphQLNonNull(GraphQLBoolean)},
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt)},
    memberType: { type: new GraphQLNonNull(MemberType)}
  }
})

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


// # * deleteUser/Post/Profile, subscribeTo, unsubscribeFrom - to pass the tests you need to return any Scalar! value, in my case it is String!

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
      type: new GraphQLNonNull(new GraphQLList(UserType)),
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
      type: new GraphQLNonNull(new GraphQLList(PostType)),
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
      type: new GraphQLNonNull(new GraphQLList(ProfileType)),
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

export const ChangePostInput = new GraphQLInputObjectType({
  name: "ChangePostInput",
  fields: () => ({
    title: {type: GraphQLString},
    content: {type: GraphQLString}
  })
});

export const ChangeProfileInput = new GraphQLInputObjectType({
  name: "ChangeProfileInput",
  fields: () => ({
    isMale: {type: GraphQLBoolean},
    yearOfBirth: {type: GraphQLInt},
    memberTypeId: {type: MemberTypeId}
  })
})

export const ChangeUserInput  = new GraphQLInputObjectType ({
  name: "ChangeUserInput",
  fields: () => ({
    balance: {type: GraphQLFloat},
    name: {type: GraphQLString}
  })
})

export const CreatePostInput  = new GraphQLInputObjectType({
  name: "CreatePostInput",
  fields: () => ({
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    authorId: {type: new GraphQLNonNull(UUIDType)},
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

export const CreateUserInput  = new GraphQLInputObjectType ({
  name: "CreateUserInput",
  fields: () => ({
    balance: {type: new GraphQLNonNull(GraphQLFloat)},
    name: {type: new GraphQLNonNull(GraphQLString)}
  })
})

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
      }
    },
    unsubscribeFrom: {
      type: new GraphQLNonNull(GraphQLString),
      args: {
        userId: {type: new GraphQLNonNull(UUIDType)},
        authorId: {type: new GraphQLNonNull(UUIDType)}
      }
    }
  }
})

export const Schema = new GraphQLSchema ({
  query: RootQueryType,
  mutation: Mutations
})

// type Mutations {

//   changePost(id: UUID!, dto: ChangePostInput!): Post!
//   changeProfile(id: UUID!, dto: ChangeProfileInput!): Profile!
//   changeUser(id: UUID!, dto: ChangeUserInput!): User!
//   deleteUser(id: UUID!): String!
//   deletePost(id: UUID!): String!
//   deleteProfile(id: UUID!): String!
//   subscribeTo(userId: UUID!, authorId: UUID!): String!
//   unsubscribeFrom(userId: UUID!, authorId: UUID!): String!
// }

// scalar UUID
// schema {
//   query: RootQueryType
//   mutation: Mutations
// }