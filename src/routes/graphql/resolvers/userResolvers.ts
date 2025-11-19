import { User } from "@prisma/client";
import { contextType, argsType } from "../types/contextType.js";

export interface argsCreateUserInput {
  input: {
    balance: number;
    name: string;
  }
};
export interface argsChangeUserInput {
  input: {
    balance?: number;
    name?: string;
  },
  id: string;
}

export const userResolver = {
  users: async (_parent, _args, contextValue: contextType): Promise < User[] > => {
    return contextValue.prisma.user.findMany()
  },
  user: async (_parent, args: argsType, contextValue: contextType): Promise < User | null > => {
    return contextValue.prisma.user.findUnique({ where: { id: args.id } });
  },
  createUser: async (_parent, args: argsCreateUserInput, contextValue: contextType): Promise<User> => {
    return contextValue.prisma.user.create({ data: args.input })
  },
  changeUser: async (_parent, args: argsChangeUserInput, contextValue: contextType):  Promise<User> => {
    return contextValue.prisma.user.update({
      data: args.input,
      where: { id: args.id }
    })
  },
  deleteUser: async (_parent, args: argsType, contextValue: contextType) => {
    return contextValue.prisma.user.delete({ where: { id: args.id } })
  }
}