import { GraphQLSchema } from "graphql";
import { Mutations } from "./mutations/mutations.js";
import { RootQueryType } from "./queries/queries.js";


export const Schema = new GraphQLSchema ({
  query: RootQueryType,
  mutation: Mutations
});