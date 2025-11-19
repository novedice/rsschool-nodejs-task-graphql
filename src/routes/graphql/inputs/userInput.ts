import { GraphQLInputObjectType, GraphQLFloat, GraphQLString, GraphQLNonNull } from "graphql"

export const ChangeUserInput  = new GraphQLInputObjectType ({
  name: "ChangeUserInput",
  fields: () => ({
    balance: {type: GraphQLFloat},
    name: {type: GraphQLString}
  })
})


export const CreateUserInput  = new GraphQLInputObjectType ({
  name: "CreateUserInput",
  fields: () => ({
    balance: {type: new GraphQLNonNull(GraphQLFloat)},
    name: {type: new GraphQLNonNull(GraphQLString)}
  })
})
