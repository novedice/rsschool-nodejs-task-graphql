import { Post } from "@prisma/client";
import { contextType, argsType } from "../types/contextType.js";

export const postResolvers = {
  posts: async (_parent, _args, contextValue: contextType): Promise < Post[] > => {
    return contextValue.prisma.post.findMany()
  },
  post: async (_parent, args: argsType, contextValue: contextType): Promise < Post | null > => {
    return contextValue.prisma.post.findUnique({ where: {id: args.id } });
  }
}