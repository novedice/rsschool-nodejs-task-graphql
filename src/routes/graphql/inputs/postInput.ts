import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { UUIDType } from "../types/uuid.js";

export const ChangePostInput = new GraphQLInputObjectType({
  name: "ChangePostInput",
  fields: () => ({
    title: {type: GraphQLString},
    content: {type: GraphQLString}
  })
});

export const CreatePostInput  = new GraphQLInputObjectType({
  name: "CreatePostInput",
  fields: () => ({
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    authorId: {type: new GraphQLNonNull(UUIDType)},
  })
})

