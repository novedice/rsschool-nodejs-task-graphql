import { User } from "@prisma/client";
import { contextType, argsType } from "../types/contextType.js";

export interface argsCreateUserInput {
  dto: {
    balance: number;
    name: string;
  }
};
export interface argsChangeUserInput {
  dto: {
    balance?: number;
    name?: string;
  },
  id: string;
}

export const userResolver = {
  users: async (_parent, _args, contextValue: contextType): Promise < User[] > => {
    return contextValue.prisma.user.findMany({
      include: {
        profile: {
          include: { memberType: true }
        },
        posts: true,
        subscribedToUser: {
          include: {
            subscriber: true
          }
        },
        userSubscribedTo: {
          include: {
            author: true
          }
        }
      } 
  })
  },
  user: async (_parent, args: argsType, contextValue: contextType): Promise < User | null > => {
    return contextValue.prisma.user.findUnique({ 
      where: { id: args.id },
      include: {
        profile: {
          include: { memberType: true }
        },
        posts: true,
        userSubscribedTo: {
          include: {
            author: true,
          }
        },
        subscribedToUser: {
          include: {
            subscriber: true,
          }
        }
      } 
    });
  },
  createUser: async (_parent, args: argsCreateUserInput, contextValue: contextType): Promise<User> => {
    return contextValue.prisma.user.create({ data: args.dto })
  },
  changeUser: async (_parent, args: argsChangeUserInput, contextValue: contextType):  Promise<User> => {
    return contextValue.prisma.user.update({
      data: args.dto,
      where: { id: args.id }
    })
  },
  deleteUser: async (_parent, args: argsType, contextValue: contextType) => {
      await contextValue.prisma.user.delete({ where: { id: args.id } });
      return "OK"
  }
}