import { MemberType } from "@prisma/client";
import { argsMemberType, contextType } from "../types/contextType.js";

export const memberTypeResolvers = {
  memberTypes: async (_parent, _args, contextValue: contextType): Promise<MemberType[]> => {
    return contextValue.prisma.memberType.findMany()
  },
  memberType: async (_parent, args: argsMemberType, contextValue: contextType): Promise<MemberType | null> => {
    return contextValue.prisma.memberType.findUnique({ where: {id: args.id} })
  }
}