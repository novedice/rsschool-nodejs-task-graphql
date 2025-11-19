import { Post } from "@prisma/client";
import { contextType, argsType } from "../types/contextType.js";

export interface argsCreatePost {
  input: {
    title: string;
    content: string;
    authorId: string;
  }
};
export interface argsChangePost {
  input: {
    title?: string;
    content?: string;
  },
  id: string
}

export const postResolvers = {
  posts: async (_parent, _args, contextValue: contextType): Promise < Post[] > => {
    return contextValue.prisma.post.findMany()
  },
  post: async (_parent, args: argsType, contextValue: contextType): Promise < Post | null > => {
    return contextValue.prisma.post.findUnique({ where: { id: args.id } });
  },
  createPost: async (_parent, args: argsCreatePost, contextValue: contextType) => {
    return contextValue.prisma.post.create({ data: args.input })
  },
  changePost: async (_parent, args: argsChangePost, contextValue: contextType) => {
    return contextValue.prisma.post.update({ 
      data: args.input,
      where: { id: args.id }
    })
  },
  deletePost: async (_parent, args: argsType, contextValue: contextType) => {
    return contextValue.prisma.post.delete({ where: { id: args.id } })
  }
}