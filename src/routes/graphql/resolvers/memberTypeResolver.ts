import { MemberType } from "@prisma/client";
import { contextType } from "../types/contextType.js";

interface argsMemberType {
  id: string
}

export const memberTypeResolver = {
  memberTypes: async (_parent, _args, contextValue: contextType): Promise<MemberType[]> => {
    return contextValue.prisma.memberType.findMany()
  },
  memberType: async (_parent, args: argsMemberType, contextValue: contextType): Promise<MemberType | null> => {
    return contextValue.prisma.memberType.findUnique({ where: {id: args.id} })
  }
}